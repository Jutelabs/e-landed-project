import { useState, useEffect } from 'react';
import { Plus, TrendingUp, Building2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import AddPropertyModal from '../components/AddPropertyModal';

const CompanyDashboard = () => {
    const [listings, setListings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useAuth();

    const fetchListings = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const { data } = await axios.get('http://localhost:5000/api/listings/my-listings', config);
            setListings(data);
        } catch (error) {
            console.error("Error fetching listings:", error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchListings();
        }
    }, [user]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container-custom py-8 space-y-6"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Developer Portal</h2>
                    <p className="text-slate-500">Manage your verified portfolio and trust score.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-[#046307] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-opacity-90 transition-all"
                >
                    <Plus size={18} /> Add New Property
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-slate-500 text-sm mb-1 font-medium">Trust Score</div>
                    <div className="text-3xl font-bold text-[#D4AF37]">98/100</div>
                    <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                        <TrendingUp size={12} /> Top 5% of Developers
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-slate-500 text-sm mb-1 font-medium">Verified Sales</div>
                    <div className="text-3xl font-bold text-slate-900">0</div>
                    <div className="mt-2 text-xs text-slate-400">Since Joining E-LANDED</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-slate-500 text-sm mb-1 font-medium">Active Listings</div>
                    <div className="text-3xl font-bold text-slate-900">{listings.length}</div>
                    <div className="mt-2 text-xs text-slate-400">In your portfolio</div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <Building2 size={18} className="text-[#046307]" /> My Listings
                    </h3>
                    <button className="text-[#046307] text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="divide-y divide-slate-50">
                    {listings.length === 0 ? (
                        <div className="p-12 text-center">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                                <Building2 size={32} />
                            </div>
                            <h3 className="text-slate-900 font-medium mb-1">No properties listed yet</h3>
                            <p className="text-slate-500 text-sm mb-6">Start building your portfolio by adding your first property.</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-2 text-[#046307] font-medium hover:underline"
                            >
                                <Plus size={16} /> Add Property
                            </button>
                        </div>
                    ) : (
                        listings.map(item => (
                            <div key={item._id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden">
                                        {/* Placeholder for property image if available, else icon */}
                                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                                            <Building2 size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 group-hover:text-[#046307] transition-colors">{item.title}</div>
                                        <div className="text-sm text-slate-500 flex items-center gap-2">
                                            <span>{item.location}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span>₦{item.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.verificationStatus === 'verified' ? 'bg-green-100 text-green-700' :
                                            item.verificationStatus === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {item.verificationStatus}
                                    </div>
                                    <button className="p-2 text-slate-400 hover:text-[#046307] hover:bg-green-50 rounded-full transition-all">
                                        <FileText size={20} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <AddPropertyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onPropertyAdded={fetchListings}
            />
        </motion.div>
    );
};

export default CompanyDashboard;
