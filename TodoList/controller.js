/**
 * Created by abhishekrathore on 3/25/17.
 */
angular.module('todo')
.controller("todoCtrl",todoCtrl);

function todoCtrl(todoFactory,$localForage){

    var todo = this;


    $localForage.getItem("todo").then(function(data){

        todo.tasks = data;
    },function(err){
        todo.tasks = [];

    });

    todo.addTask = function(task){

        var obj = {text:task,status:0};
        todo.tasks.push(obj);
        $localForage.setItem("todo",todo.tasks).then(function(data){
            console.log("saved");
        });
        console.log(todo.tasks);
        todo.task = "";
    };

    todo.completeTask = function(task){
        task.status = task.status ? 0:1;
        $localForage.setItem("todo",todo.tasks).then(function(data){
            console.log("updated");
        });
        console.log(todo.tasks);

    }

    console.log(todoFactory.add(2,4));




}
