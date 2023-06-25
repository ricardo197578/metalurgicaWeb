import express from "express";
import router from "./routes/index.js"
import db from "./config/db.js";
const app = express();

//CONECTAR A LA BASEDEDATOS

db.authenticate()
	.then(()=>console.log('BASE DE DATOS CONECTADA'))
	.catch(error=>console.log('error'));

//DEFINIENDO PUERTO
//
const port = process.env.PORT || 4000;

//AGREGAR ROUTER
//
app.use("/",router);

app.listen(port, ()=>{
	console.log("SERVIDOR OK")
})

//HABILITAR PUG

app.set("view engine","pug");

//OBTENER EL AÑO ACTUAL

app.use((req, res, next) => {
        const year = new Date();

        res.locals.actualYear = year.getFullYear();
        res.locals.nombreSitio= "Agencia de Viajes";
        return next();

});

//DEFINIR CARPETA PUBLIC
//
app.use(express.static("public"));
