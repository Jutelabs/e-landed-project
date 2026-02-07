const express = require('express');
const router = express.Router();
const { getListings, getListingById, createListing, updateListing, deleteListing, getMyListings } = require('../controllers/listingController');
const { protect } = require('../middleware/authMiddleware');

router.get('/my-listings', protect, getMyListings);
router.get('/', getListings);
router.get('/:id', getListingById);
router.post('/', protect, createListing);
router.put('/:id', protect, updateListing);
router.delete('/:id', protect, deleteListing);

module.exports = router;
