/**
 * Created by abhishekrathore on 5/6/17.
 */
angular.module("rest",[])
   .controller("testCtrl",testCtrl);



function testCtrl($http){

    var url = 'https://jsonplaceholder.typicode.com';

    var test = this;




    $http.get(url+'/comments').then(function(result){

        console.log(result);
        test.comments = result.data;
        console.log(test.comments)

    });

    $http.get(url+'/posts').then(function(result){

        console.log(result);
        test.posts = result.data;

    });



}