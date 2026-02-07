import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, TrendingUp, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Wide land with luxury house"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
                            The Future of African Real Estate
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                            Building Trust in Every <br />
                            <span className="text-[#D4AF37]">Square Meter.</span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                            E-LANDED is more than a marketplace. We are the digital infrastructure verifying ownership,
                            empowering developers, and securing investments across the continent.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/about"
                                className="px-8 py-4 bg-[#046307] text-white rounded-2xl font-bold text-lg shadow-2xl hover:bg-[#057a09] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                Our Mission <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/properties"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                            >
                                Explore Marketplace
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#046307] py-12 border-b border-green-800">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    <div>
                        <div className="text-4xl font-bold mb-1">₦50B+</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Property Value Verified</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">10k+</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Verified Titles</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">500+</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Vetted Developers</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">0%</div>
                        <div className="text-sm opacity-80 uppercase tracking-wider">Fraud Rate</div>
                    </div>
                </div>
            </div>

            {/* Introduction / About Snippet */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Redefining Real Estate Standards</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                For too long, the property market has been plagued by opacity, duplicate titles, and mistrust.
                                E-LANDED was born from a simple yet powerful idea: <strong>What if technology could guarantee trust?</strong>
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                By integrating directly with government land registries and implementing military-grade verification protocols for developers,
                                we've created a safe haven for investors and a launchpad for legitimate real estate companies.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#046307]">
                                        <Users size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-800">Community First</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#046307]">
                                        <Globe size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-800">Pan-African Vision</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>
                            <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 bg-[#046307] p-2 rounded-lg text-white">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Verification Engine</h3>
                                            <p className="text-slate-500 mt-1">Our proprietary system cross-checks 15+ data points per property.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 bg-[#D4AF37] p-2 rounded-lg text-white">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Developer Accreditation</h3>
                                            <p className="text-slate-500 mt-1">Only the top 5% of developers pass our strict due diligence checks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Value Prop (Kept for clarity but styled differently) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The E-LANDED Ecosystem</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">A comprehensive platform serving the needs of modern real estate.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-[#046307]">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">For Investors</h3>
                            <p className="text-slate-600 leading-relaxed">Secure your future with title-verified properties and escrow protection.</p>
                            <Link to="/register" className="inline-block mt-4 text-[#046307] font-semibold hover:underline">Start Investing &rarr;</Link>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-[#D4AF37]">
                                <Building2 size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">For Developers</h3>
                            <p className="text-slate-600 leading-relaxed">Gain credibility and access a pool of serious, ready-to-buy investors.</p>
                            <Link to="/register" className="inline-block mt-4 text-[#D4AF37] font-semibold hover:underline">Partner with Us &rarr;</Link>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">For Diaspora</h3>
                            <p className="text-slate-600 leading-relaxed">Invest in home from anywhere in the world with total peace of mind.</p>
                            <Link to="/about" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">Learn More &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
