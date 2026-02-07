import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { MapPin, Tag, Building2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Properties = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/listings');
                setListings(data);
            } catch (error) {
                console.error("Error fetching listings", error);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Verified Marketplace</h1>
                    <div className="max-w-2xl relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by location, price, or developer..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-[#046307] transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-96 animate-pulse">
                                <div className="h-48 bg-slate-200"></div>
                                <div className="p-6 space-y-3">
                                    <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {listings.length === 0 ? (
                            <div className="col-span-3 text-center py-20 text-slate-500">
                                No properties found. Be the first to list!
                            </div>
                        ) : (
                            listings.map((item) => (
                                <motion.div
                                    key={item._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#046307] flex items-center gap-1">
                                            <Building2 size={12} /> Verified Title
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-2xl font-bold text-[#046307] mb-2">₦{item.price.toLocaleString()}</div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-1">{item.title}</h3>
                                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                                            <MapPin size={16} /> {item.location}
                                        </div>
                                        <hr className="border-slate-100 my-4" />
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                {item.owner?.name || 'Unknown Developer'}
                                            </div>
                                            <Link to={`/listings/${item._id}`} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Properties;
