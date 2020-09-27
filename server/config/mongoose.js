import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.mongo_url,{
     useNewUrlParser: true,
     useCreateIndex:true,
     useFindAndModify:false,
     useUnifiedTopology: true
})