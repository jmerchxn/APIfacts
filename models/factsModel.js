import mongoose from "mongoose";
const Schema = mongoose.Schema;

const factCollection = 'facts';

const factSchema = new Schema({
    category: {
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'categories', 
        required: true 
    },
    fact: { //descripción
        type: String,
        required: true 
    },
    keyword: {
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'keyword', 
        required: true 
    },
    uniqueId: {
        type: String,
        required: false 
    },
    created: {
        type: Date,
        default: Date.now
    },
});

// Crea el modelo
const factModel = mongoose.model(factCollection, factSchema);
export default factModel;
