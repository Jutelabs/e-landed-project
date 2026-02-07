import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo-with-no-bg.png';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} alt="E-LANDED List" className="h-20 w-auto" />
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link to="/properties" className="hover:text-[#046307] transition-colors">Marketplace</Link>
                    <Link to="/about" className="hover:text-[#046307] transition-colors">About Us</Link>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link
                                to={user.role === 'company' ? "/dashboard/company" : "/dashboard/buyer"}
                                className="flex items-center gap-2 px-4 py-2 bg-[#046307] text-white rounded-full hover:bg-opacity-90 transition-all shadow-md"
                            >
                                <LayoutDashboard size={18} /> Dashboard
                            </Link>
                            <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors">Logout</button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/login" className="px-4 py-2 hover:text-[#046307]">Sign In</Link>
                            <Link
                                to="/register"
                                className="px-6 py-2 bg-[#D4AF37] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
