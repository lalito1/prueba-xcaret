const express = require('express');
const routes = require('./rutas');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });

//cors permite que un cliente se conecte a otro servidor para el intercambio de recursos
const cors = require('cors');

//conectar mongo

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})
//se crea el servidor

const app = express();

//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Definir un domionio(s) para recibir las peticiones
const whiteList =[process.env.FRONTEND_URL];
const corsOptions = {
    origin:(origin,callback) =>{
        console.log(origin);
        //revisar si la peticion viene de un servidor que esta en el whitelist
        const exist = whiteList.some(dominio => dominio === origin);
        if(exist){
            callback(null,true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}
//habilitar cors
app.use(cors(corsOptions));
//rutas de la app
app.use('/',routes());
//puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 2000;

app.listen(port , host, ()=>{
    console.log('el servidor esta funcionando');
});