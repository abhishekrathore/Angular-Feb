/**
 * Created by abhishekrathore on 3/18/17.
 */


var app = angular.module("firstApp",[]);
app.controller("testCtrl",testCtrl);
app.controller("demoCtrl",demoCtrl);


function testCtrl(){

    var test = this;
    test.name = "test"
    test.speak = function(){
        test.showError = !test.showError;
    }

    test.url = "android.png"

    test.nations = [{"name":"India","code":"IN"},{"name":"Sri Lanka","code":"SL"}];

 

}

function demoCtrl(){

    this.name = "demo"

}