import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-[#046307] text-white py-20">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        About E-LANDED
                    </motion.h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        We are on a mission to make real estate transactions in Africa transparent, secure, and accessible to everyone.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="container-custom py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Story</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed text-center">
                        E-LANDED was founded in response to a critical challenge: the lack of trust in land transactions.
                        With stories of duplicate sales, fake titles, and lengthy litigation becoming commonplace,
                        we realized that technology could bridge the gap between buyers and legitimate property owners.
                        What started as a digital verification tool has evolved into a full-service ecosystem
                        that protects billions of Naira in real estate assets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-[#046307] mb-6">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To eliminate land fraud completely. We aim to verify every square meter of land listed on our platform,
                            ensuring that "verified" means exactly that—100% risk-free.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-[#D4AF37] mb-6">
                            <Lightbulb size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To become the gold standard for property transactions across Africa, creating a seamless,
                            digital-first marketplace that attracts global investment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-slate-50 py-20">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="font-bold text-lg text-slate-900">John Doe</h3>
                                <p className="text-[#046307] text-sm font-medium mb-3">Co-Founder & CEO</p>
                                <p className="text-slate-500 text-sm">
                                    Former real estate attorney with 15 years of experience in land law and property rights.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="container-custom py-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {['Integrity First', 'Radical Transparency', 'Customer Obsession', 'Innovation'].map((val, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-[#046307] mb-4">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900">{val}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
