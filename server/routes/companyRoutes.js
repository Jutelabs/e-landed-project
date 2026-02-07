const express = require('express');
const router = express.Router();
const { getCompanies, getCompanyById, updateCompanyProfile } = require('../controllers/companyController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getCompanies);
router.get('/:id', getCompanyById);
router.put('/profile', protect, updateCompanyProfile);

module.exports = router;
