// import mongoose from 'mongoose';


// console.log("inside");
// const userSchema=new mongoose.Schema({
    
// })
// module.exports = mongoose.models.StudentDetails || mongoose.model('StudentDetails',userSchema)

import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    password:{
        type: String
    }
})

module.exports = mongoose.models.Registrations || mongoose.model('Registrations',userSchema)