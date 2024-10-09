import mongoose from "mongoose";
const Schema = mongoose.Schema;

const keywordCollection = 'keywords';

const keywordSchema = new Schema({
    keyword: {
        type: String,
        required: true, 
    }
    
    // facts: [{
    //     type: Schema.Types.ObjectId, 
    //     ref: 'facts' 
    // }]
});

const keywordModel = mongoose.model(keywordCollection, keywordSchema);
export default keywordModel;
