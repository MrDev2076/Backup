const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true
},
    discription:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        require:false
    }

});

module.exports = mongoose.model('Post',postSchema)