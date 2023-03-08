'use strict'

const mongoose = require('../../common/services/mongoose.service').mongoose;

const itemsSchema = new mongoose.Schema({

    description: {

        type:mongoose.Schema.Types.String

    },

    date: {

        type:mongoose.Schema.Types.String

    },

    time: {

        type:mongoose.Schema.Types.String

    }

}, {versionKey:false})


    itemsSchema.set('toJSON',{virtuals:false});

    const Items = mongoose.model('items',itemsSchema,'items');

   
exports.getItems = ()=>{

    return new Promise((resolve,reject)=>{

        Items.find({}).exec((error,result)=>{

            if(error){
                reject(error.message);
                throw error.message;

            }
            if(result){
                resolve(result);
            }
        })    

    }).catch(error=>{
        throw error.message;
    })


}   



exports.deleteItem = (id)=>{

    return new Promise((resolve,reject)=>{

        Items.deleteOne({_id:id}).exec((error,result)=>{

            if(error){
                reject(error.message);
                throw error.message;

            }
            if(result.deletedCount){
                resolve(true);            
            }else{
                resolve(false);
            }
        })

    }).catch(error=>{
        throw error.message;
    })

    
}



exports.addItem = (info) => {

    try {

       
        const tarea =

        {

            description: info.description,

            date: info.created_at.slice(0,10),

            time: info.created_at.slice(11,16)

        };

        const todo = new Items(tarea);  

        return todo.save().catch(error => { error.message });



    }catch(error){

        throw error.message;

    }

}

