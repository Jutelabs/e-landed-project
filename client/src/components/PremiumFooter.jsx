import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-with-no-bg.png';

const PremiumFooter = () => {
    return (
        <footer className="bg-[#0b1215] text-white pt-20 pb-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            {/* Using logo with white background container if needed, or just the logo if it contrasts well. 
                                 Given footer is dark, adding a small bg might be safer if logo is black text. 
                                 Testing with simple img first based on request. */}
                            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                <img src={logo} alt="E-LANDED" className="h-24 w-auto" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                E-LANDED
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            The gold standard for real estate verification in Africa.
                            Securing investments, empowering developers, and building the future.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#046307] transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#046307] transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#046307] transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#046307] transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Platform</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link to="/properties" className="hover:text-[#D4AF37] transition-colors">Marketplace</Link></li>
                            <li><Link to="/verified-companies" className="hover:text-[#D4AF37] transition-colors">Verified Developers</Link></li>
                            <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                            <li><Link to="/register" className="hover:text-[#D4AF37] transition-colors">Register Company</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Support & Legal</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Report Fraud</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#046307] mt-0.5" />
                                <span>123 Victoria Island,<br />Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#046307]" />
                                <span>+234 800 ELANDED</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#046307]" />
                                <span>hello@e-landed.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} E-LANDED. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default PremiumFooter;
