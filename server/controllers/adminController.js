const User = require('../models/User');
const Listing = require('../models/Listing');

// @desc    Verify a company
// @route   PUT /api/admin/companies/:id/verify
// @access  Private (Admin only)
const verifyCompany = async (req, res) => {
    try {
        const company = await User.findById(req.params.id);

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        company.isVerified = true;
        // Optionally set trust score baseline
        if (company.trustScore === 0) {
            company.trustScore = 50; // Initial score
        }

        await company.save();

        res.status(200).json({ message: 'Company verified', isVerified: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update Trust Score
// @route   PUT /api/admin/companies/:id/trustscore
// @access  Private (Admin only)
const updateTrustScore = async (req, res) => {
    try {
        const { score } = req.body;
        const company = await User.findById(req.params.id);

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        company.trustScore = score;
        await company.save();

        res.status(200).json({ message: 'Trust score updated', trustScore: company.trustScore });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    verifyCompany,
    updateTrustScore
};
