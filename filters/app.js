/**
 * Created by abhishekrathore on 4/15/17.
 */
angular.module("filter",[])
     .controller("demoCtrl",demoCtrl)
     .factory("dataService",dataService)


function demoCtrl(dataService){

    var demo = this;

    demo.people = dataService;

    console.log("demo",dataService)
    
}


function dataService(){

    return [{"id":1,"first_name":"Martin","last_name":"Hanson","email":"mhanson0@reuters.com","gender":"Male","ip_address":"20.252.247.140"},
        {"id":2,"first_name":"Robert","last_name":"Olson","email":"rolson1@friendfeed.com","gender":"Male","ip_address":"162.105.52.63"},
        {"id":3,"first_name":"Diana","last_name":"Hudson","email":"dhudson2@com.com","gender":"Female","ip_address":"117.108.14.188"},
        {"id":4,"first_name":"Aaron","last_name":"Rodriguez","email":"arodriguez3@umn.edu","gender":"Male","ip_address":"23.188.15.141"},
        {"id":5,"first_name":"Paul","last_name":"Hart","email":"phart4@google.com.br","gender":"Male","ip_address":"4.165.255.51"},
        {"id":6,"first_name":"Shawn","last_name":"Cruz","email":"scruz5@wisc.edu","gender":"Male","ip_address":"94.118.81.252"},
        {"id":7,"first_name":"Judy","last_name":"Gonzales","email":"jgonzales6@multiply.com","gender":"Female","ip_address":"177.64.116.154"},
        {"id":8,"first_name":"William","last_name":"Vasquez","email":"wvasquez7@wix.com","gender":"Male","ip_address":"46.245.184.196"},
        {"id":9,"first_name":"Earl","last_name":"Johnston","email":"ejohnston8@auda.org.au","gender":"Male","ip_address":"230.20.107.24"},
        {"id":10,"first_name":"Emily","last_name":"Franklin","email":"efranklin9@canalblog.com","gender":"Female","ip_address":"78.40.31.243"}]
}