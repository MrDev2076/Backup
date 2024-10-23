const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
},
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:Number,
        default:0 //0 -> Normal, 1 -> Admin, 2 -> Sub-Admin, 3 -> Editor
    }

});

module.exports = mongoose.model('User',userSchema)