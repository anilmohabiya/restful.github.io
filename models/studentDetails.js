const mongoose = require("mongoose")

const  studentSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:3
    },

    first_round:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:2
    },
 

       second_round:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:2
    },

      third_round:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:2
    }, 

    email:{
        type:String,
        required:true,
        unique:true
    },
        phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
    }


},
    { timestamps: true }
)
const studentModel = mongoose.model("candidate", studentSchema)
module.exports = studentModel;