/**
 * Created by abhishekrathore on 3/25/17.
 */
angular.module("todo")
.factory("todoFactory",todoFactory)

function todoFactory(){

    function sum(a,b){
        return (a + b)
    }

    return {
        add : sum
    };




}
