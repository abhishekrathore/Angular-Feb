/**
 * Created by abhishekrathore on 2/25/17.
 */
console.log("started");


var cities = ["jaipur","alwar","sikar"];


for(var i=0;i<cities.length;i++){
    console.log(cities[i]);
}


cities.push("delhi");
var deleted = cities.pop();

var villages = ["kanpur","lucknow"]


var list = cities.concat(villages)

