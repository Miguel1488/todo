const express = require("express");
const db = require("./utils/database");
const Todo = require("./models/todo.models");
const todoRouter = require("./routers/todo.roustes");
const app = express();
app.use(express.json());
app.use(todoRouter)


const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log("Conexion a la base de datos");
    })
    .catch((error) => {
        console.log("Error en la base de datos", error);
    })

db.sync()
    .then(() => {
        console.log("Conexion del servidor")
    })
    .catch((error) => {
        console.log(error)
    })
app.get("/", (req, res) => {
    res.send(console.log("Estas en el servidor 8000"))
});



app.listen(PORT, () => {
    console.log(`Me encuentro en el servidor" ${PORT}`)
});


