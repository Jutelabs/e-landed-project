import { ShieldCheck, Bell, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BuyerDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container-custom py-8 space-y-6"
        >
            <div className="bg-gradient-to-r from-[#046307] to-[#0a4b0c] p-8 rounded-2xl text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back, Investor</h2>
                    <p className="text-green-50/80 mb-6">You currently have 3 properties in the verification pipeline. Sleep soundly knowing E-LANDED is on the job.</p>
                    <div className="flex gap-3">
                        <button className="bg-[#D4AF37] text-white px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition-all">New Search</button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all">Talk to Lawyer</button>
                    </div>
                </div>
                <ShieldCheck size={180} className="absolute -right-10 -bottom-10 text-white opacity-10 rotate-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-800">Verification Status</h3>
                        <Bell size={18} className="text-slate-400" />
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'Lekki Phase 2 Plot', stage: 'Title Search', progress: 65 },
                            { name: 'Abuja Garden City', stage: 'Owner KYC', progress: 30 }
                        ].map((job, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-slate-700">{job.name}</span>
                                    <span className="text-slate-500">{job.stage}</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-[#D4AF37] h-full transition-all duration-1000" style={{ width: `${job.progress}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4">Top Rated Developers</h3>
                    <div className="space-y-4">
                        {[
                            { name: 'Zenith Real Estate', score: 99, location: 'Lagos' },
                            { name: 'Heritage Homes', score: 96, location: 'Abuja' }
                        ].map((dev, idx) => (
                            <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                                        {dev.name[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-800 flex items-center gap-1">
                                            {dev.name} <CheckCircle2 size={14} className="text-[#D4AF37]" />
                                        </div>
                                        <div className="text-xs text-slate-400">{dev.location}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[#046307] font-bold text-sm">{dev.score}%</div>
                                    <div className="text-[10px] text-slate-400 uppercase">Trust Score</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BuyerDashboard;
