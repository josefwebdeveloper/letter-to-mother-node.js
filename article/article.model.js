const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    article: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

ArticleSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Article', ArticleSchema);