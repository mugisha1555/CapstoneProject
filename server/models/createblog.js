import mongoose,{Schema} from 'mongoose'

const BlogSchema = new Schema({
    title:{
        type:String,
       // min:3,
        max:100,
        required:true
    },
    date:{
        type:String,

        required:true
    },
    body:{
        type:String,
        //min:10,
        required:true
    },

},{timestamps:true})


const createblog = mongoose.model('createblog',BlogSchema);
export default createblog;