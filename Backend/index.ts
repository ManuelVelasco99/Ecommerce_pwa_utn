import Server from "./class/server";
import express from "express";
import cors from 'cors';
import mysqlconection from './bin/mysqlConection';
import userRoutes from './routes/user'
import adminRoutes from './routes/admin';
import FileSystem from "./class/file_system";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';


//Instanciando el servidor Web
const server = new Server();

server.start(()=>{
    console.log(`servidor corriendo en puerto :${server.port} y en host ${server.host}`);
});

//Inicializando carpetas
FileSystem.IniciarCarpetas();

// body parser
server.app.use(express.urlencoded({ extended: false }));
server.app.use(express.json()); //express.json()

//fileupload
server.app.use(fileUpload());

//cors
server.app.use(cors());

//Conexión MySQL

mysqlconection;

//Rutas de la app

server.app.use('/user', userRoutes);
server.app.use('/admin', adminRoutes);