import mongoose from "mongoose";

const companySchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String, //URL of company logo.
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
}, {timestamps:true})

export const Company = mongoose.model("Company", companySchema);