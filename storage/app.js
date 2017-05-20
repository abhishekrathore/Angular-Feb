/**
 * Created by abhishekrathore on 4/29/17.
 */
console.log("working");
localStorage.setItem("company",new Date());

var data =localStorage.getItem("company");

console.log(data);

var person = {};
person.name = "abhishek";
person.class = "angular";

localStorage.setItem("person",person);

var p = localStorage.getItem("person");


localStorage.setItem("person2",JSON.stringify(person))


var person2 = localStorage.getItem("person2")

console.log(JSON.parse(person2).name);

localforage.setItem("firstname","ajay");

var fn = localforage.getItem("firstname", function(err,data){
    if(err) throw err;
    console.log(data);

});
console.log(fn);


//localforage.setItem("person3",person);

localforage.getItem("person3", function(err,data){
    if(err) throw err;
    console.log(data);

});