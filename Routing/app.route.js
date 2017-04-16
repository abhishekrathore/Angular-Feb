/**
 * Created by abhishekrathore on 4/15/17.
 */

angular.module("routing")
    .config(config)
function config($routeProvider){


    $routeProvider
        .when("/first", {
            templateUrl:"partials/first.html",
            controller:"firstCtrl",
            controllerAs :"first"
        })
        .when("/product", {
            templateUrl:"partials/second.html",
            controller:"secondCtrl",
            controllerAs:"second"
        })
        .when("/product/:category", {
            templateUrl:"partials/second.html",
            controller:"secondCtrl",
            controllerAs:"second"
        })
        .when("/product/:category/:subcategory", {
            templateUrl:"partials/first.html",
            controller:"firstCtrl",
            controllerAs:"first"
        })
        .otherwise({redirectTo:"/product"});

}