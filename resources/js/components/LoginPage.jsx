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

    const handleLogin = () => {
        setAlertState(null);

        axios.post('/api/login', { email, password }, { withCredentials: true })
            .then(response => {
                setUser(response.data.user);
                navigate('/dashboard');
            })
            .catch(error => {
                const status = error.response?.status;
                setAlertState(LOGIN_ALERT_MESSAGES[status] ?? LOGIN_ALERT_MESSAGES.default);
            });
    }

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 px-4 py-10">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Login</h2>

                <LoginAlert alertState={alertState} />
                <div className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
