const express = require("express");

const app = express();

function HolaMundo(request, response){
    console.log("hola mundo") // esto pa el servidor 
    response.send("hola mundoo") //esto se devuelve al cliente
}

app.get("/", HolaMundo)

app.listen(3000, () =>{
    console.log("el servidor esta funcionando en el puerto 3000")
})