import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero3D from '../components/Hero3D';
import TrustMarquee from '../components/TrustMarquee';
import happyHomePhoto from '../assets/happy-home.png';
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const sections = gsap.utils.toArray('.gsap-section');
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: false,
                    },
                }
            );
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-50">
            {/* 3D Hero Section */}
            <Hero3D
                title={
                    <>
                        Invest in <span className="text-[#D4AF37]">Premium</span> <br /> African Real Estate
                    </>
                }
                subtitle="Secure your future with verified titles, vetted developers, and a seamless digital experience."
                buttons={
                    <>
                        <Link
                            to="/properties"
                            className="bg-[#046307] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#035205] transition-all shadow-lg hover:shadow-green-900/20"
                        >
                            Explore Marketplace
                        </Link>
                        <Link
                            to="/register"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            Become a Partner
                        </Link>
                    </>
                }
            />

            {/* Trusted Brand Marquee */}
            <TrustMarquee />

            {/* Human Feel / Mission Section */}
            <section className="py-24 bg-white gsap-section">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 relative space-y-6">
                            {/* Replaced with Unsplash "Human Feel" images as requested */}
                            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={happyHomePhoto}
                                    alt="Happy African Family Home Owner"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <div className="text-white font-bold text-xl">The Emeka's Family</div>
                                    <div className="text-slate-300 text-sm">Proud Owners, Anambra Gardens</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-slate-100">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-green-100 p-3 rounded-full text-[#046307]">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">100% Verified</div>
                                        <div className="text-xs text-slate-500">Title Document</div>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm">"We verified the land title instantly on E-LANDED before paying. Best decision ever."</p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <span className="text-[#046307] font-bold tracking-wider uppercase text-sm mb-2 block">Our Promise</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Real Estate with a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#046307] to-[#D4AF37]">Human Touch.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Behind every transaction is a dream. Whether it's a family buying their first home,
                                a diaspora investor building wealth back home, or a developer creating a masterpiece.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                We don't just verify documents; we verify trust. Our platform ensures that the joy of ownership isn't marred by fraud or legal battles.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Support Team</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-slate-900">3 Days</div>
                                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Avg. Verification</div>
                                </div>
                            </div>

                            <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-[#046307] font-bold hover:gap-4 transition-all">
                                Read Our Story <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Business Model Section */}
            <section className="py-24 bg-white gsap-section">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#046307] font-bold tracking-wider uppercase text-sm mb-2 block">For Partners</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Empowering Real Estate Companies</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            We provide a suite of tools to elevate your brand, verify your projects, and connect you with serious investors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Listing & PR Services', desc: 'Get your properties seen by thousands of verified buyers and boost your brand authority.', icon: <Globe size={24} /> },
                            { title: 'Verified Profiles', desc: 'Showcase your company’s legitimacy with our verified badge and detailed public profiles.', icon: <ShieldCheck size={24} /> },
                            { title: 'Analytics & Insights', desc: 'Understand your market with detailed data on buyer behavior and property trends.', icon: <Users size={24} /> },
                            { title: 'Consultancy', desc: 'Expert advice on digital transformation, compliance, and market strategy.', icon: <Building2 size={24} /> }
                        ].map((service, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#046307] mb-6 group-hover:bg-[#046307] group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prototype Features / Why Use E-LANDED */}
            <section className="py-24 bg-slate-50 gsap-section">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The E-LANDED Advantage</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Connecting credibility with discovery through our advanced platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-[#046307]">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Company Profiles</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">Instantly distinguish legimite developers from fraudsters. Our rigorous vetting process ensures you only deal with the best.</p>
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-[#046307] group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-[#D4AF37]">
                                    <Globe size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">PR Integration & Reach</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">High-visibility listings and featured placements that tell your brand story and reach millions of diaspora investors.</p>
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="w-2/3 h-full bg-[#D4AF37] group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Seamless Buyer Interface</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">A frictionless experience for discovery, virtual tours, and secure payments, designed for the modern investor.</p>
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="w-1/2 h-full bg-blue-600 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
