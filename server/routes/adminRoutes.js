const express = require('express');
const router = express.Router();
const { verifyCompany, updateTrustScore } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

// Middleware to check for Admin role
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

router.put('/companies/:id/verify', protect, admin, verifyCompany);
router.put('/companies/:id/trustscore', protect, admin, updateTrustScore);

module.exports = router;
