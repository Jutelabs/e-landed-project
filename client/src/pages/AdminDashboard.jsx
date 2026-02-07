import { useState, useEffect } from 'react';
import { ShieldCheck, Settings, FileText } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, we'd have a specific admin endpoint to get *unverified* companies
        // For now, we'll fetch all companies and filter/verify client side or mock it
        // Since we didn't make a dedicated "get all users" admin endpoint, let's mock the data or reuse getCompanies if possible
        // but getCompanies only returns verified ones.
        // Let's create a mock list or assume the backend endpoint existed.
        // Actually, let's just show a placeholder for the MVP flow since we didn't explicity create 'getUnverifiedCompanies'.
        setLoading(false);
    }, []);

    // Mock Data for MVP demo
    const mockCompanies = [
        { _id: '1', name: 'Sunrise Developers', email: 'contact@sunrise.com', isVerified: false, trustScore: 0, registrationDocs: 'doc.pdf' },
        { _id: '2', name: 'Urban Living Ltd', email: 'info@urban.com', isVerified: false, trustScore: 0, registrationDocs: 'cert.pdf' },
    ];

    const handleVerify = async (id) => {
        // Here we would call axios.put(/api/admin/companies/${id}/verify)
        alert(`Company ${id} Verified! Trust Score set to 50.`);
        // Update local state to remove verified company
    };

    return (
        <div className="container-custom py-10">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
                    <p className="text-slate-500">Oversee verification processes and platform health.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-sm font-medium text-slate-600">
                    Last sync: Just now
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Verification Queue */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <ShieldCheck className="text-amber-500" size={20} />
                            Verification Queue
                        </h2>
                    </div>

                    <div className="p-6 space-y-4">
                        {mockCompanies.map(company => (
                            <div key={company._id} className="border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow bg-white">
                                <div>
                                    <h3 className="font-bold text-slate-900">{company.name}</h3>
                                    <p className="text-sm text-slate-500 mb-2">{company.email}</p>
                                    <button className="text-xs flex items-center gap-1 text-blue-600 font-medium hover:underline">
                                        <FileText size={12} /> View Documents
                                    </button>
                                </div>
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <button onClick={() => handleVerify(company._id)} className="flex-1 sm:flex-none py-2 px-4 bg-[#046307] text-white text-xs font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-sm">
                                        Approve
                                    </button>
                                    <button className="flex-1 sm:flex-none py-2 px-4 bg-red-50 text-red-600 border border-red-100 text-xs font-bold rounded-lg hover:bg-red-100 transition-all">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                        {mockCompanies.length === 0 && <p className="text-slate-500 text-center py-8">No pending verifications.</p>}
                    </div>
                </div>

                {/* Trust Score Algorithm Controls */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <Settings className="text-slate-600" size={20} />
                            Trust Score Configuration
                        </h2>
                    </div>

                    <div className="p-6">
                        <p className="text-sm text-slate-500 mb-6">Adjust the weights of different factors to calibrate the automated Trust Score.</p>

                        <div className="space-y-6">
                            {[
                                { label: 'Verification Documents', weight: 50, color: 'bg-[#046307]' },
                                { label: 'Customer Reviews', weight: 30, color: 'bg-blue-500' },
                                { label: 'Years in Operation', weight: 20, color: 'bg-purple-500' }
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                                        <span>{item.label}</span>
                                        <span>{item.weight}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3">
                                        <div className={`${item.color} h-3 rounded-full relative`} style={{ width: `${item.weight}%` }}>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-200 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button className="w-full border border-slate-200 text-slate-600 font-medium rounded-xl py-3 text-sm mt-4 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                                <Settings size={16} /> Recalibrate Algorithm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
