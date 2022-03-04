const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Posts = require('../models/Posts');
const url = '/posts';

const postsAxios = axios.create({
    baseURL: 'https://blog.xcaret.com/es/wp-json/wp/v2'
});

exports.consultarApi = async (req,res,next) => {

    const postsConsulta = await postsAxios.get('/posts');
    console.log(postsConsulta.data);

    const post = new Posts(postsConsulta.data);

    console.log(post);

    try {

        post.collection.insertMany(postsConsulta.data, function(err,docs){
            if(err){
                // res.json({mensaje:'hubo un error en la insercion',error:err});
                console.log(err)
            }else{
                console.log(err);
                res.json({mensaje:'se insertaron las publicaciones',data:docs});
            }
        });
        
    } catch (error) {
        res.send(error);
        next();
    }/***/

}