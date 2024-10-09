import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Definimos la colección
const categoryCollection = 'categories'; 

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true 
    }

});


const categoryModel = mongoose.model(categoryCollection, categorySchema);
export default categoryModel;
