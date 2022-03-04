const getPosts = require('../models/Posts');

exports.obtenerPosteos = async(req,res,next)=>{

    try{
        
        const posteos =  await getPosts.find({},'id slug title yoast_head_json');
        res.json(posteos);

    }catch(error){
        console.log(error);
        next();
    }
}

exports.getFullContent = async(req,res,next)=>{

    try{
        
        const blogs =  await getPosts.find({'slug':req.params.name},'id content');
        res.json(blogs);

    }catch(error){
        console.log(error);
        next();
    }
}