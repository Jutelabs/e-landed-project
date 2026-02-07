import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AddPropertyModal = ({ isOpen, onClose, onPropertyAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const propertyData = {
                title,
                description,
                price: Number(price),
                location,
                images: [], // Placeholder for now, or add image input
            };

            await axios.post('http://localhost:5000/api/listings', propertyData, config);

            // Reset form
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');

            onPropertyAdded();
            onClose();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add property');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden"
                >
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-slate-800">Add New Property</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Property Title</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Luxury Apartment in Lekki"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                            <textarea
                                required
                                className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307] h-24 resize-none"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe the property..."
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Price (₦)</label>
                                <input
                                    type="number"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="50000000"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Location</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#046307]"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Lagos, Nigeria"
                                />
                            </div>
                        </div>

                        <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-[#046307] hover:text-[#046307] transition-colors cursor-pointer">
                            <Upload size={32} className="mb-2" />
                            <span className="text-sm font-medium">Upload Property Images</span>
                            <span className="text-xs opacity-70">(Feature coming soon)</span>
                        </div>

                        <div className="pt-4">
                            <button
                                type="button" // Changed to button to avoid accidental submit if type missing, but form has onSubmit
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full bg-[#046307] text-white py-3 rounded-xl font-bold shadow-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
                            >
                                {loading ? 'Creating Listing...' : 'Create Listing'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AddPropertyModal;
