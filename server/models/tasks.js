const mongoose = require('mongoose');

// setting up structure of DB
const schema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'required field'],
        maxLength: [100, 'length of name must be < 100 characters'],
        trim:true
    },
    priority: {
        type: String, 
        required: [true, 'required field'],
        enum: ['low', 'moderate', 'high']
    },
    completed: {
        type: Boolean,
        required: [true, 'default to false'],
        default: false
    },
    state: {
        type: String,
        required: [true, 'default to active'],
        enum: ['active', 'pending-deletion'],
        default: 'active'
    }
},
{
    timestamps: true
}
);

// virtual proprty of time taken
schema.virtual('timeElapsed').get(function () {
    return Date.now() - this.createdAt.getTime();
});

module.exports = mongoose.model('Task', schema);