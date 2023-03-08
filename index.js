'use strict'
//importamos libreria express
const express = require ('express');
//importamos libreria cors
const cors = require ('cors');
//importamos libreria morgan
const morgan = require ('morgan');

//instanciamos  express hacia el objeto app
const app = express();
//middlewares
//implementamos cors
app.use(cors());
//implementamos morgan en modo desarrollo
app.use(morgan('dev'));
//para pasar de json en el body a objetos javaScript
app.use(express.json());
//para pasar de json url a objetos javaScript
app.use(express.urlencoded({extended:false}));
//importar el archivo de rutas de todo.routes
const TodoRoutes= require('./todolist/routes/todo.routes');
//pasamos la instancia app
TodoRoutes.todoRoutes(app);

//ejecutamos el servidor para escuchar en el puerto 3000y la IP localhost---->127.0.0.1
app.listen(3000,'localhost',()=>{
    console.log('Server listening on port %s',3000);

})
