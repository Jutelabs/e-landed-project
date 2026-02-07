import { motion } from 'framer-motion';

const VerifiedCompanies = () => {
    return (
        <div className="container-custom py-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-8 text-center"
            >
                Verified Real Estate Companies
            </motion.h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Browse our list of legally vetted and verified property companies. We ensure they meet strict standards so you can invest with peace of mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for companies */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Verified Company {item}</h3>
                        <div className="flex items-center text-green-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold">Legally Vetted</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-6">Brief description of the company goes here.</p>
                        <button className="btn-secondary w-full py-2">View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerifiedCompanies;
