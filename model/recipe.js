const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    preptime: {
        type: Number,
        required: false
    },
    cooktime: {
        type: Number,
        required: true
    },
    flavor: {
        type: String,
        required: false
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Recipe = mongoose.model('krebrecipes', recipeSchema);
module.exports = Recipe;