/**
 * Created by abhishekrathore on 3/25/17.
 */
angular.module('todo')
.controller("todoCtrl",todoCtrl);

function todoCtrl(todoFactory){

    var todo = this;

    todo.tasks = [];
    todo.addTask = function(task){

        var obj = {text:task,status:0};
        todo.tasks.push(obj);
        console.log(todo.tasks);
        todo.task = "";
    };

    todo.completeTask = function(task){
        task.status = task.status ? 0:1;
        console.log(todo.tasks);

    }

    console.log(todoFactory.add(2,4));




}
