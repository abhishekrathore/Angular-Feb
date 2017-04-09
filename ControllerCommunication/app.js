/**
 * Created by abhishekrathore on 3/26/17.
 */
angular.module("ctrlcom",[])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)


function firstCtrl(dataService,$rootScope){

    var first = this;

    $rootScope.title = "youstart";

    first.data =  dataService.data;
     dataService.name = "first";
  //  first.name = dataService.name;

    first.status = function(){
        console.log(first.data);


    }


}

function secondCtrl(dataService,$rootScope){

    var second = this;

    
    second.data =  dataService.data;
    second.name =  dataService.name;
    
    

    second.status = function(){
        console.log(second.data);
    }
}

