const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimerSchema = new Schema({
    startTime: { type: Date, required: true },
    // createdDate: { type: Date, default: Date.now }
});

TimerSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Timer', TimerSchema);