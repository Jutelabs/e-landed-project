import React from 'react';
import { motion } from 'framer-motion';
import {
    Target,
    Lightbulb,
    ShieldCheck,
    Zap,
    AlertCircle,
    Search,
    CheckCircle2
} from 'lucide-react';

const MissionVisionSection = () => {
    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dotPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#046307" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dotPattern)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* --- MISSION: Text Left, Image Right --- */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-[#046307] text-sm font-bold uppercase tracking-widest mb-6 border border-green-100">
                            <Target size={18} /> Our Mission
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Creating a <span className="text-[#046307]">Verified</span> <br />
                            Digital Ecosystem
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            To revolutionize real estate transactions by creating a verified digital ecosystem where buyers and property companies connect with confidence. We bridge the gap between investment and safety.
                        </p>
                        <div className="space-y-4">
                            {['100% Document Verification', 'Fraud Prevention Technology', 'Secure Buyer-Developer Direct Connect'].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800">
                                    <CheckCircle2 size={20} className="text-[#D4AF37]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#046307] to-[#D4AF37] rounded-[2.5rem] opacity-10 blur-2xl"></div>
                            <div className="relative bg-slate-100 rounded-[2rem] aspect-[4/3] overflow-hidden shadow-2xl border-8 border-white group">
                                {/* Image Placeholder with Hover Effect */}
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                                        alt="Mission - Verified Real Estate"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#046307] p-2 rounded-lg"><ShieldCheck className="text-white" size={24} /></div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase">Verification System</p>
                                            <p className="text-sm font-bold text-slate-800 italic">"99.9% Fraud Detection Accuracy"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- VISION: Image Left, Text Right --- */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-40">
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-6 border border-amber-100">
                            <Lightbulb size={18} /> Our Vision
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Africa's Most <span className="text-[#D4AF37]">Trusted</span> <br />
                            Marketplace
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            To eliminate fraud in property acquisition and become Africa’s most trusted real estate marketplace, connecting credibility with discovery. We aim to make land ownership a dream that never becomes a nightmare.
                        </p>
                        <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#D4AF37] rounded-r-2xl italic text-slate-700">
                            "By 2030, E-LANDED will be the standard for every property transaction across the continent."
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-bl from-[#D4AF37] to-[#046307] rounded-[2.5rem] opacity-10 blur-2xl"></div>
                            <div className="relative bg-slate-100 rounded-[2rem] aspect-[4/3] overflow-hidden shadow-2xl border-8 border-white group">
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                                        alt="Vision - Modern African City"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- PROBLEMS WE SOLVE --- */}
                <div className="relative">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">The Problems We Solve</h2>
                        <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                id: "01",
                                title: "Trust Deficit",
                                icon: <AlertCircle className="text-red-500" />,
                                desc: "Buyers struggle to trust real estate companies due to a history of fraud and unverified claims.",
                                color: "border-red-100 hover:border-red-500"
                            },
                            {
                                id: "02",
                                title: "Visibility Gap",
                                icon: <Zap className="text-[#D4AF37]" />,
                                desc: "Legitimate companies struggle with credibility and gaining visibility in a crowded, noisy market.",
                                color: "border-amber-100 hover:border-[#D4AF37]"
                            },
                            {
                                id: "03",
                                title: "Disconnected System",
                                icon: <ShieldCheck className="text-[#046307]" />,
                                desc: "There is no trusted centralized platform that effectively connects verified credibility with buyer discovery.",
                                color: "border-green-100 hover:border-[#046307]"
                            }
                        ].map((problem, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white p-10 rounded-[2rem] border-2 ${problem.color} shadow-sm transition-all duration-300 group hover:-translate-y-2`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                                }}
                            >
                                <div className="text-sm font-black text-slate-400 mb-6 group-hover:text-slate-600 transition-colors uppercase tracking-widest">
                                    Problem {problem.id}
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {problem.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {problem.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVisionSection;
