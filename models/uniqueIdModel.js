import mongoose from "mongoose";
const Schema = mongoose.Schema;

const uniqueIdCollection = 'uniqueIds';

const uniqueIdSchema = new Schema({
    uniqueId: {
        type: String,
        required: true, 
        unique: true 
    }
});

const uniqueIdModel = mongoose.model(uniqueIdCollection, uniqueIdSchema);
export default uniqueIdModel;