const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'User'
},
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'post'
    },
    comment:{
        type:String,
        require:true,
}

});

module.exports = mongoose.model('Comment',commentSchema)