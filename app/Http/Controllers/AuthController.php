<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    private const MAX_FAILED_ATTEMPTS = 5;
    private const LOCK_MINUTES = 15;

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if ($user?->locked_until?->isFuture()) {
            Log::channel('login')->notice('Login blocked by account lock', [
                'user_id' => $user->id,
                'email' => $credentials['email'],
                'ip' => $request->ip(),
                'locked_until' => $user->locked_until,
            ]);

            return response()->json([
                'message' => 'Account is locked. Please try again later.',
            ], 423);
        }

        if (!Auth::attempt($credentials)) {
            if ($user !== null) {
                $failedAttempts = $user->failed_login_attempts + 1;
                $lockUntil = $failedAttempts >= self::MAX_FAILED_ATTEMPTS
                    ? now()->addMinutes(self::LOCK_MINUTES)
                    : null;

                $user->forceFill([
                    'failed_login_attempts' => $lockUntil ? 0 : $failedAttempts,
                    'locked_until' => $lockUntil,
                ])->save();
            }

            Log::channel('login')->warning('Login failed', [
                'user_id' => $user?->id,
                'email' => $credentials['email'],
                'ip' => $request->ip(),
            ]);

            if ($user?->locked_until !== null) {
                Log::channel('login')->notice('Account locked after failed login attempts', [
                    'user_id' => $user->id,
                    'email' => $credentials['email'],
                    'ip' => $request->ip(),
                    'locked_until' => $user->locked_until,
                ]);

                return response()->json([
                    'message' => 'Account is locked. Please try again later.',
                ], 423);
            }

            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->session()->regenerate();
        $user = Auth::user();
        $user->forceFill([
            'failed_login_attempts' => 0,
            'locked_until' => null,
        ])->save();

        RateLimiter::clear($this->throttleKey($request, $credentials['email']));

        Log::channel('login')->info('Login successful', [
            'user_id' => $user->id,
            'email' => $user->email,
            'ip' => $request->ip(),
        ]);

        return response()->json(['user' => $user], 200);
    }

    private function throttleKey(Request $request, string $email): string
    {
        return Str::lower($email).'|'.$request->ip();
    }
}
