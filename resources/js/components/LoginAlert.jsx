import React from 'react';

const alertStyles = {
    error: 'border-rose-200 bg-rose-50 text-rose-700',
    lock: 'border-amber-200 bg-amber-50 text-amber-700',
    'rate-limit': 'border-sky-200 bg-sky-50 text-sky-700',
};

function LoginAlert({ alertState }) {
    if (!alertState) {
        return null;
    }

    return (
        <div
            className={`mb-5 rounded-xl border px-4 py-3 text-sm ${alertStyles[alertState.type] ?? alertStyles.error}`}
            role="alert"
        >
            <p className="font-bold">{alertState.title}</p>
            <p className="mt-1 opacity-90">{alertState.message}</p>
        </div>
    );
}

export default LoginAlert;
