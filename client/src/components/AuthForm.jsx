import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthForm = ({ mode }) => { // mode: 'login' or 'signup'
    const [role, setRole] = useState('buyer');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For signup
    const [error, setError] = useState('');

    // Company specific
    const [companyName, setCompanyName] = useState('');
    const [rcNumber, setRcNumber] = useState('');

    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        let res;
        if (mode === 'login') {
            res = await login(email, password);
        } else {
            // Signup
            const userData = {
                email,
                password,
                role,
                name: role === 'company' ? companyName : name,
            };
            if (role === 'company') {
                userData.rcNumber = rcNumber; // Ensure backend handles this or add it to User model
            }
            res = await register(userData);
        }

        if (res.success) {
            if (mode === 'login') {
                // Redirect based on role not available in login response immediately unless we decode token or return it. 
                // For now, let's assume successful login redirects to dashboard via AuthContext or we check user role after.
                // Actually AuthContext sets user. Let's rely on that or simple redirect.
                // The snippet redirected to 'dashboard'. We'll redirect to /dashboard/buyer or /dashboard/company
                // But we might not know the role immediately if login doesn't return it in the simplistic response.
                // Let's assume common redirect to / which handles it or specific dashboard.
                navigate('/');
            } else {
                navigate('/');
            }
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">{mode === 'signup' ? 'Join the Ecosystem' : 'Welcome Back'}</h2>
                    <p className="text-slate-500 text-sm mt-2">Securing Africa's land transactions, one plot at a time.</p>
                </div>

                <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
                    <button
                        onClick={() => setRole('buyer')}
                        type="button"
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${role === 'buyer' ? 'bg-white shadow-sm text-[#046307]' : 'text-slate-500'}`}
                    >
                        Buyer
                    </button>
                    <button
                        onClick={() => setRole('company')}
                        type="button"
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${role === 'company' ? 'bg-white shadow-sm text-[#046307]' : 'text-slate-500'}`}
                    >
                        Company
                    </button>
                </div>

                {error && <div className="mb-4 text-red-500 text-sm text-center bg-red-50 p-2 rounded">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === 'signup' && role === 'buyer' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}

                    {mode === 'signup' && role === 'company' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Company Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                                placeholder="Zenith Real Estate"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {mode === 'signup' && role === 'company' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Registration (RC Number)</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                                placeholder="RC-123456"
                                value={rcNumber}
                                onChange={(e) => setRcNumber(e.target.value)}
                            />
                        </div>
                    )}

                    <button type="submit" className="w-full bg-[#046307] text-white py-3 rounded-xl font-bold shadow-lg hover:bg-opacity-90 transition-all">
                        {mode === 'signup' ? 'Create Account' : 'Login'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-500">
                    {mode === 'signup' ? "Already have an account?" : "Don't have an account?"}
                    <Link
                        to={mode === 'signup' ? '/login' : '/register'}
                        className="ml-1 font-bold text-[#D4AF37] hover:underline"
                    >
                        {mode === 'signup' ? 'Login' : 'Signup'}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthForm;
