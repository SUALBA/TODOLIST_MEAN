'use strict'

const TodoController = require ('../controllers/todo.controller');



exports.todoRoutes = function(app){

    app.get('/api/get_items',TodoController.getAllItems);

    app.post('/api/add_item',TodoController.addItem);

    app.delete('/api/delete_item/:id',TodoController.deleteItem);

   // app.put ('/api/edit_item',TodoController.editTodo);
}
