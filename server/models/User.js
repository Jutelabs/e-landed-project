const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['buyer', 'company', 'admin'],
        default: 'buyer'
    },
    // Company specific fields
    description: {
        type: String
    },
    logoUrl: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    trustScore: {
        type: Number,
        default: 0
    },
    registrationDocs: {
        type: String // URL to document
    },
    rcNumber: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    // Buyer specific fields
    savedListings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
