import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginAlert from './LoginAlert';
import { LOGIN_ALERT_MESSAGES } from '../constants/loginMessages';

function LoginPage({setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertState, setAlertState] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setAlertState(null);

        try {
            await axios.get('/sanctum/csrf-cookie');

            const response = await axios.post('/api/login', { email, password });
            setUser(response.data.user);
            navigate('/dashboard');
        } catch (error) {
            const status = error.response?.status;
            setAlertState(LOGIN_ALERT_MESSAGES[status] ?? LOGIN_ALERT_MESSAGES.default);
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 px-4 py-10">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Login</h2>

                <LoginAlert alertState={alertState} />
                <form className="space-y-4" onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400 sm:text-sm"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400 sm:text-sm"
                    />
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
