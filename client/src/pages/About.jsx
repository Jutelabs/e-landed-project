import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, CheckCircle } from 'lucide-react';
import MissionVisionSection from '../components/MissionVisionSection';
import emmaPhoto from '../assets/emmachrisworld profile.png';
import mmesomaPhoto from '../assets/mmesoma.jpg';
import crystalPhoto from '../assets/crystal-photo.jpeg';
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
                        Reimagining African Real Estate
                    </motion.h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        To eliminate fraud in property acquisition and become Africa’s most trusted real estate marketplace.
                    </p>
                </div>
            </div>

            {/* New Mission, Vision & Problems Section */}
            <MissionVisionSection />

            {/* Team Section */}
            <div className="bg-slate-50 py-20">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet The Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Emmachris',
                                role: 'Co-Founder & Team Lead',
                                initials: 'EC',
                                image: emmaPhoto
                            },
                            {
                                name: 'Mmesoma',
                                role: 'Co-Founder & Operations',
                                initials: 'MM',
                                image: mmesomaPhoto
                            },
                            {
                                name: 'Crystal',
                                role: 'Co-Founder & Product',
                                initials: 'CR',
                                image: crystalPhoto // Image file 'crystalworld profile.png' not found in assets
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center border border-slate-100 group">
                                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-slate-50 group-hover:border-green-50 transition-colors">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className="w-full h-full flex items-center justify-center text-2xl font-bold bg-green-50 text-[#046307] group-hover:bg-[#046307] group-hover:text-white transition-colors"
                                        style={{ display: member.image ? 'none' : 'flex' }}
                                    >
                                        {member.initials}
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-[#046307] text-sm font-medium mb-4">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Dedicated to building the future of trusted real estate in Africa.
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
