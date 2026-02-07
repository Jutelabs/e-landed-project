import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo-with-no-bg.png';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} alt="E-LANDED List" className="h-20 w-auto" />
                </Link>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-600 hover:text-[#046307] transition-colors p-2"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-4 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col gap-4 text-lg font-medium text-slate-600">
                        <Link to="/properties" className="hover:text-[#046307] transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Marketplace</Link>
                        <Link to="/about" className="hover:text-[#046307] transition-colors p-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    </div>

                    <div className="h-px bg-slate-100 w-full"></div>

                    {user ? (
                        <div className="flex flex-col gap-4">
                            <Link
                                to={user.role === 'company' ? "/dashboard/company" : "/dashboard/buyer"}
                                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#046307] text-white rounded-xl hover:bg-opacity-90 transition-all shadow-md text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <LayoutDashboard size={20} /> Dashboard
                            </Link>
                            <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors py-2 text-lg">Logout</button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <Link to="/login" className="text-center px-4 py-2 hover:text-[#046307] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                            <Link
                                to="/register"
                                className="text-center px-6 py-3 bg-[#D4AF37] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
