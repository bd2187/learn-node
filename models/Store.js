const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // removes white space from string
        required: 'Please enter a store name'
    },
    slug: String,
    description: {
        type: String,
        trim: true        
    },
    tags: [String]
});

// sets slug property before saving store
storeSchema.pre('save', function(next) {
    
    // if name isn't modified, don't run it through slug
    if (!this.isModified('name')) {
        next(); // skip it
        return;
    }
    this.slug = slug(this.name);
    next();
});

module.exports = mongoose.model('Store', storeSchema);
