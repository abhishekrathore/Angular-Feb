/**
 * Created by abhishekrathore on 5/6/17.
 */
angular.module("rest",[])
   .controller("testCtrl",testCtrl);



function testCtrl($http){

    var url = 'https://jsonplaceholder.typicode.com';

    var test = this;
    test.getData = getData;


    //
    // $http.get(url+'/comments').then(function(result){
    //
    //     console.log(result);
    //     test.comments = result.data;
    //     console.log(test.comments)
    //
    // });
    //
    // $http.get(url+'/posts').then(function(result){
    //
    //     console.log(result);
    //     test.posts = result.data;
    //
    // });

    var mockurl = "http://demo3925528.mockable.io"

    // $http.get(mockurl+'/getname?a=1').then(function(result){
    //
    //     console.log("SUCCESS",result);
    //     test.posts = result.data;
    //
    // }).catch(function(result){
    //     console.log("ERR",result);
    // })


    // $http.post(mockurl+'/senddata',{a:1,b:2}).then(function(result){
    //
    //     console.log("SUCCESS",result);
    //     test.posts = result.data;
    //
    // }).catch(function(result){
    //     console.log("ERR",result);
    // })

    var baseurl = "https://gateway.marvel.com";
    var apiKey = "1f1eef6169fc3b523d81a6983f7e14f2"

    function getData() {

        $http.get(baseurl + '/v1/public/characters?apikey=' + apiKey + "&name=" + test.name).then(function (result) {

            console.log("SUCCESS", result);

            test.characters = result.data.data.results;


            test.posts = result.data;

        }).catch(function (result) {
            console.log("ERR", result);
        })

    }



}