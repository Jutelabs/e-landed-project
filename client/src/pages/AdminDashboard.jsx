import { useState, useEffect } from 'react';
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard - E-LANDED</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Verification Queue */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        Verification Queue
                    </h2>
                    <div className="space-y-4">
                        {mockCompanies.map(company => (
                            <div key={company._id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-lg">{company.name}</h3>
                                    <p className="text-sm text-gray-500">{company.email}</p>
                                    <a href="#" className="text-xs text-blue-600 hover:underline">View Documents</a>
                                </div>
                                <div className="space-x-2">
                                    <button onClick={() => handleVerify(company._id)} className="btn-primary text-xs py-1 px-3 bg-green-600 hover:bg-green-700">Approve</button>
                                    <button className="bg-red-50 text-red-600 border border-red-200 text-xs py-1 px-3 rounded hover:bg-red-100">Reject</button>
                                </div>
                            </div>
                        ))}
                        {mockCompanies.length === 0 && <p className="text-gray-500">No pending verifications.</p>}
                    </div>
                </div>

                {/* Trust Score Algorithm Controls */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        Trust Score Weights
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">Adjust the impact of different factors on the automated Trust Score.</p>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm font-medium mb-1">
                                <span>Verification Documents</span>
                                <span>50%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-medium mb-1">
                                <span>Customer Reviews</span>
                                <span>30%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-medium mb-1">
                                <span>Years in Operation</span>
                                <span>20%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                        <button className="w-full border border-gray-300 rounded py-2 text-sm mt-4 hover:bg-gray-50">Calibrate Algorithm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
