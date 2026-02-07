const User = require('../models/User');

// @desc    Get verified companies
// @route   GET /api/companies
// @access  Public
const getCompanies = async (req, res) => {
    try {
        const companies = await User.find({ role: 'company', isVerified: true }).select('-password');
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get company profile
// @route   GET /api/companies/:id
// @access  Public
const getCompanyById = async (req, res) => {
    try {
        const company = await User.findById(req.params.id).select('-password');
        if (company && company.role === 'company') {
            res.status(200).json(company);
        } else {
            res.status(404).json({ message: 'Company not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update company profile
// @route   PUT /api/companies/profile
// @access  Private (Company only)
const updateCompanyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (user && user.role === 'company') {
            user.name = req.body.name || user.name;
            user.description = req.body.description || user.description;
            user.logoUrl = req.body.logoUrl || user.logoUrl;
            user.registrationDocs = req.body.registrationDocs || user.registrationDocs;

            // Note: Verification status and Trust Score should not be user-editable typically, 
            // but for MVP/demo maybe? No, let's keep them protected.

            const updatedUser = await user.save();

            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                description: updatedUser.description,
                logoUrl: updatedUser.logoUrl,
                isVerified: updatedUser.isVerified,
                trustScore: updatedUser.trustScore
            });
        } else {
            res.status(404).json({ message: 'User not found or not a company' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getCompanies,
    getCompanyById,
    updateCompanyProfile
};
