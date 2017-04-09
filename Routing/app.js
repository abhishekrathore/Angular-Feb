/**
 * Created by abhishekrathore on 4/8/17.
 */
angular.module("routing",["ngRoute"])

    .config(config)
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

function secondCtrl(dataService){


    var second = this;
    second.human = dataService;
    console.log("secondCtrl")
}

function config($routeProvider){


    $routeProvider
        .when("/first", {templateUrl:"partials/first.html"})
        .when("/second", {templateUrl:"partials/second.html"})
        .otherwise({redirectTo:"/second"});

}

function dataService(){
    return {}
}