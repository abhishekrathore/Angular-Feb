/**
 * Created by abhishekrathore on 2/25/17.
 */
var person = {};
person.name = "abhishek";
person.age = 23;
person.present = false;



var person2 = {
    name:"vikas",
    age:24,
    present:false
};

// console.log(person);
//
// console.log(person2);

person.nation = "india";
person2 = {nation:"india"};

// console.log(person2);

person.speak = function(speechType){
    speechType();
};


var talk = function(){
    console.log("hello");
    return talk;
}


person.speak(talk);

person.speak(talk());

person = person2;

console.log(person,person2);

person.nation = "US";












// speak();
// talk();
//
//
// function speak(){
//     console.log("hi");
// }  //HOISTING
//
// var talk = function(){
//     console.log("hello");
// }



