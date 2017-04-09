/**
 * Created by abhishekrathore on 3/26/17.
 */
angular.module("ctrlcom")
    .factory("dataService",dataService)



function dataService(){

    return {
        data : {text:"initial"},
        name : "demo"
    }


}