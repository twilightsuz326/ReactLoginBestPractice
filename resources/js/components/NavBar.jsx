import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Design Sample', to: '/design-sample' },
    { label: 'Dashboard', to: '/dashboard' },
];

function linkClassName({ isActive }) {
    return [
        'rounded-lg px-3 py-1.5 text-sm transition-colors',
        isActive
            ? 'bg-indigo-50 text-indigo-600'
            : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600',
    ].join(' ');
}

function NavBar({ user, handleLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
                <NavLink
                    to="/"
                    onClick={closeMenu}
                    className="text-lg font-bold tracking-tight text-gray-900"
                >
                    ReactLogin
                </NavLink>

                <div className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={linkClassName}>
                            {item.label}
                        </NavLink>
                    ))}

                    {user ? (
                        <>
                            <span className="ml-2 text-sm font-medium text-gray-500">
                                Welcome, {user.name}
                            </span>
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
                    <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={linkClassName}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {user ? (
                            <>
                                <div className="px-3 py-2 text-sm font-medium text-gray-500">
                                    Welcome, {user.name}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        closeMenu();
                                        handleLogout();
                                    }}
                                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <NavLink
                                to="/login"
                                onClick={closeMenu}
                                className="rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
