import Server from "./class/server";
import express from "express";
import cors from 'cors';

//Instanciando el servidor Web
const server = new Server();

server.start(()=>{
    console.log(`servidor corriendo en puerto :${server.port} y en host ${server.host}`);
});


// body parser
server.app.use(express.urlencoded({ extended: false })); // express.urlencoded({ extended: false })
server.app.use(express.json()); //express.json()

//cors
server.app.use(cors());