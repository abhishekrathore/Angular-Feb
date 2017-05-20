/**
 * Created by abhishekrathore on 5/20/17.
 */
angular.module('backend',['firebase'])
 .controller("testCtrl",testCtrl);




function testCtrl($firebaseObject,$scope,$firebaseArray){



      var test = this;
      var rootRef =  firebase.database().ref();
      var rootObj = $firebaseObject(rootRef);


      var students = rootRef.child("students");
      var projects = rootRef.child("projects");
      var studentsObj = $firebaseObject(students);

      test.projectsArr = $firebaseArray(projects);


      test.students = studentsObj.$bindTo($scope, "students")


      test.projectsArr.$add("abc");

     // rootObj.$loaded().then(function(data){
     //     console.log(data.name);
     // });



     console.log("hello");

}