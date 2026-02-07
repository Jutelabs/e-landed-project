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
                    <h3 className="font-semibold text-slate-800">My Listings</h3>
                    <button className="text-[#046307] text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="divide-y divide-slate-50">
                    {listings.length === 0 ? (
                        <div className="p-8 text-center text-slate-500">
                            No properties listed yet. Start by adding one!
                        </div>
                    ) : (
                        listings.map(item => (
                            <div key={item._id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <Building2 className="text-slate-400" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">{item.title}</div>
                                        <div className="text-xs text-slate-500">{item.location} • ₦{item.price.toLocaleString()}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${item.verificationStatus === 'verified' ? 'bg-green-100 text-green-700' :
                                            item.verificationStatus === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {item.verificationStatus}
                                    </span>
                                    <button className="p-2 text-slate-400 hover:text-slate-600"><FileText size={18} /></button>
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
