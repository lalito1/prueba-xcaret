const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postsSchema = new Schema({

    id:{
        type:Number,
        unique:true,
        trim:true
    },
    date:{
        type: String,
        trim:true
    },
    date_gmt:{
        type: String,
        trim:true
    },
    guid:{
        type: Object,
        trim:true,
    },
    modified:{
        type: String,
        trim:true,
    },modified_gmt:{
        type: String,
        trim:true
    },slug:{
        type: String,
        trim:true
    },status:{
        type: String,
        trim:true
    },type:{
        type: String,
        trim:true,
    },link:{
        type: String,
        trim:true
    },title:{
        type: Object,
        trim:true
    },content:{
        type: Object,
        trim:true
    },excerpt:{
        type: Object,
        trim:true
    },author:{
        type: Number,
        trim:true
    },modified:{
        type: String,
        trim:true,
    },featured_media:{
        type: Number,
        trim:true
    },comment_status:{
        type: String,
        trim:true,
    },ping_status:{
        type: String,
        trim:true,
    },sticky:{
        type: Boolean,
        trim:true,
    },template:{
        type: String,
        trim:true,
    },format:{
        type: String,
        trim:true,
    },meta:{
        type: Object,
        trim:true,
    },categories:{
        type: Array,
        trim:true,
    },tags:{
        type: Array,
        trim:true
    },yoast_head:{
        type: String,
        trim:true
    },yoast_head_json:{
        type: Object,
        trim:true
    },_links:{
        type: Object,
        trim:true
    }
})

module.exports = mongoose.model('Posts',postsSchema);