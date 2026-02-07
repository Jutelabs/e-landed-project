const Listing = require('../models/Listing');
const User = require('../models/User');

// @desc    Get all listings
// @route   GET /api/listings
// @access  Public
const getListings = async (req, res) => {
    try {
        const listings = await Listing.find({ status: 'available', verificationStatus: 'verified' })
            .populate('owner', 'name trustScore isVerified email');
        res.status(200).json(listings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get listing by ID
// @route   GET /api/listings/:id
// @access  Public
const getListingById = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id)
            .populate('owner', 'name description logoUrl trustScore isVerified');

        if (listing) {
            res.status(200).json(listing);
        } else {
            res.status(404).json({ message: 'Listing not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a listing
// @route   POST /api/listings
// @access  Private (Company only)
const createListing = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (user.role !== 'company') {
            return res.status(403).json({ message: 'Only companies can create listings' });
        }

        if (!user.isVerified) {
            // Optional: Block unverified companies? 
            // "Verified ecosystem... buyers connect with confidence".
            // Maybe allow creation but mark as pending verification.
        }

        const { title, description, price, location, images } = req.body;

        const listing = await Listing.create({
            title,
            description,
            price,
            location,
            images,
            owner: user._id,
            verificationStatus: 'pending' // Default to pending until admin reviews? Or auto-verify if company is verified?
            // "Document vault for land titles... reviewed by E-LANDED admins" -> Implies listing verification too or just company?
            // "Verification Status Tracker... for a property" -> Properties need verification.
        });

        res.status(201).json(listing);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update a listing
// @route   PUT /api/listings/:id
// @access  Private (Owner only)
const updateListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        // Check ownership
        if (listing.owner.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedListing);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete/Archive a listing
// @route   DELETE /api/listings/:id
// @access  Private (Owner only)
const deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        if (listing.owner.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await listing.deleteOne();

        res.status(200).json({ message: 'Listing removed' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get company's listings
// @route   GET /api/listings/my-listings
// @access  Private (Company only)
const getMyListings = async (req, res) => {
    try {
        const listings = await Listing.find({ owner: req.user.id });
        res.status(200).json(listings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing,
    getMyListings
};
