/**
 * Created by abhishekrathore on 4/8/17.
 */
angular.module("routing",["ngRoute"])

    .controller("firstCtrl",firstCtrl)
    .controller("secondCtrl",secondCtrl)
    .factory("dataService",dataService);


function firstCtrl(dataService,$location,$timeout){

    var first = this;
    first.person = dataService;
    console.log("firstCtrl")
    $timeout(function(){
        $location.path("/second");

    },2000);
}

function secondCtrl(dataService,$routeParams){


    var second = this;
    second.cat = $routeParams.category
    second.human = dataService;
    console.log("secondCtrl")
}



function dataService(){
    return {}
}