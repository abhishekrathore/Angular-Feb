/**
 * Created by abhishekrathore on 5/20/17.
 */
angular.module('backend',['firebase'])
 .controller("testCtrl",testCtrl)
    .controller("authCtrl",authCtrl)





function testCtrl($firebaseObject,$scope,$firebaseArray){



      var test = this;
      
      var rootRef =  firebase.database().ref();
      var students = rootRef.child("students");
      var projects = rootRef.child("projects");
      
      var rootObj = $firebaseObject(rootRef);
      var studentsObj = $firebaseObject(students);
      test.projectsArr = $firebaseArray(projects);


      
      test.addProjects = function(project){
            test.projectsArr.$add(project);

      }
      




     console.log("hello");

}

function authCtrl($firebaseAuth){

      var Auth = $firebaseAuth();
      var auth = this;
      
      

      auth.login = function(provider){

            Auth.$signInWithPopup(provider).then(function(result) {
                  console.log("Signed in as:", result.user);

                  auth.user = result.user;
            }).catch(function(error) {
                  console.error("Authentication failed:", error);
            });
      }


}