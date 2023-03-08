'use strict'

const todoModel = require('../models/todo.model');


exports.getAllItems = (request,response)=>{
    console.log('received getAllItems request');

    todoModel.getItems().then((items,error)=>{

        if(error){
            throw error.message;
        }

        if(items){

            return response.status(200).send(items);
        }else{
            return response.status(204);
        }


    }).catch(error=>{
        throw error.message;
    })

}


exports.addItem = (request,response) => {
    console.log('received getAddItems request');

    todoModel.addItem(request.body).then((items,error)=>{

        if(error){
            throw error.message;
        }

        if(items){

            return response.status(200).send({info:"ok"});
        }else{
            return response.status(204);
        }


    }).catch(error=>{
        throw error.message;
    })

}



exports.deleteItem = (request,response)=>{
    console.log('received deleteItem request');

    todoModel.deleteItem(request.params.id).then((item,error)=>{

        if(error){
            throw error.message;
        }

        if(item){
            return response.status(200).send({info:true});
        }else{
            console.error('error on deleteItem');
            return response.status(500);
        }
    }).catch(error=>{
        throw error.message;
    })
}

