const express = require("express");

const app = express();

const users = [
{
    "username": "admin",
    "password": "admin",
    "email": "admin@gmail.com",
    "status": "active",
},
{
    "username": "user1",
    "password": "user2",
    "email": "user2@gmail.com",
    "status": "active",
}
]

function getUsers(request,response){
    response.json(users)
}

app.get("/", (req, res) =>{
    res.send
})
app.get("/users", getUsers)
app.get("/users", (req,res) => {
    res.json(users)
})


app.listen(3000, () =>{
    console.log("el servidor esta funcionando en el puerto 3000")
})