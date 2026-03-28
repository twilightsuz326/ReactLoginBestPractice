import React from 'react';

const alertStyles = {
    error: 'border-red-200 bg-red-50 text-red-700',
    lock: 'border-amber-200 bg-amber-50 text-amber-700',
    'rate-limit': 'border-blue-200 bg-blue-50 text-blue-700',
};

function LoginAlert({ alertState }) {
    if (!alertState) {
        return null;
    }

    return (
        <div
            className={`mb-4 rounded-xl border px-4 py-3 text-sm ${alertStyles[alertState.type] ?? alertStyles.error}`}
            role="alert"
        >
            <p className="font-medium">{alertState.title}</p>
            <p className="mt-1">{alertState.message}</p>
        </div>
    );
}

export default LoginAlert;
