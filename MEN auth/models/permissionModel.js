const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'User'
    },
    permissions:[{
        permission_name: String,
        permission_value: [Number] //0123 CRED
    }]

});

module.exports = mongoose.model('Permission',permissionSchema)