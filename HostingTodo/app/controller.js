/**
 * Created by abhishekrathore on 3/25/17.
 */
angular.module('todo')
.controller("todoCtrl",todoCtrl);

function todoCtrl(todoFactory,$localForage,$firebaseArray){

    var todo = this;


    var taskRef = firebase.database().ref("tasks");
    todo.tasks = $firebaseArray(taskRef);


    // $localForage.getItem("todo").then(function(data){
    //
    //     if(data!=null){
    //         todo.tasks = data;
    //     }else{
    //         todo.tasks = [];
    //     }
    //
    // },function(err){
    //     todo.tasks = [];
    //
    // });

    todo.addTask = function(task){

        var obj = {text:task,status:0};
        todo.tasks.$add(obj);
        // $localForage.setItem("todo",todo.tasks).then(function(data){
        //     console.log("saved");
        // });
        console.log(todo.tasks);
        todo.task = "";
    };

    todo.completeTask = function(task){
        task.status = task.status ? 0:1;
        todo.tasks.$save(task);
        // $localForage.setItem("todo",todo.tasks).then(function(data){
        //     console.log("updated");
        // });
        console.log(todo.tasks);

    }

    console.log(todoFactory.add(2,4));




}
