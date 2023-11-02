
// let ary =[];
// let fruit=["apple","mango","banan"];
// fruit[0]="paiapple";
// fruit[1]="slait";
// fruit[2]="habrid";
// alert(fruit[0]);
// alert("this is a"+fruit[0]);
// let name =(firstname="ahmad", lastname="sultan");
// alert(fruit.length);
// alert(fruit)
// // last index
// alert(fruit.length-1);
// // variable write for twice 
// alert(fruit.at(-1));
// // let fruit=["apple","mango","banan"];
// // push append element to end 
// alert(fruit.push);
// // pop take element from end
// alert(fruit.pop);
// // shift get form Start
// alert(fruit.shift);
// // unshift add elemnt to start
// alert(fruit.unshift);
// //  for loop
// // let fruit=["apple","mango","banan"];
// for(let i =0; i<fruit.length; i++){
//     alert(fruit);
// }
// // for of
// // let fruit=["apple","mango","banan"];
// for(let arr of fruit){
//     alert(fruit)
// }
// // for in
// for(let key in fruit){
//     alert(fruit[arr]);
// }
// // clear arry
// arry.length=0;
// // new arrry method 
// let arr = new Array ();
// // mutidimentional arry

// simple arry ///

var array = [10, 20, 30, 40, 50];
var sum = 0;
for (var a = 0; a < array.length; a++) {
    document.write("<br><ul>" + array[a] + "<br></ul>")
    sum = sum + array[a];
}
document.write("sum of the total " + " " + sum + "<br>");

// var ary =new Array(3);
// name[0]="ahmad";
// name[1]="sultan";
// name[2]="ali";
// // document.write(name);
// document.write(ary);

// multidimention array/
var multi_ary = [
    ["ahmad", 20, "sultan"],
    ["hasan", 10, "ali"],
    ["zaka", 40, "akhter"]
];

for (var i = 0; i < multi_ary.length; i++) {
    for (var j = 0; j < multi_ary.length; j++) {
        document.write(multi_ary[i][j] + " ");
    }
    document.write("<br>")
}
document.write("<br>");
document.write("<br>");

// modify  amd del arrray 

var arry1 = ["ahmad", 20, "sultan"];
document.write(arry1);
arry1[1] = 30;
document.write("<br>");
document.write(arry1);
delete arry1[1];
document.write("<br>");
document.write(arry1);

// sort arry and reverse 
var arry2 = ["ahmad", 20, "sultan", "harry", "chaina"];
arry2.sort();
document.write("<br>");
document.write(arry2);
arry2.reverse();
document.write("<br>");
document.write(arry2);
document.write("<br>");


// pop and push method`
var arry3 = ["ahmad", 20, "sultan", "harry", "chaina"];
arry3.pop();
document.write("<br>");
document.write(arry3);
arry3.push("neha", "farrry");
document.write("<br>");
document.write(arry3);
document.write("<br>");

// shift and unshoft/
var arry4 = ["ahmad", 20, "sultan", "harry", "chaina"];
arry4.shift();
document.write("<br>");
document.write(arry4);
arry4.unshift("ahmad", "ahad");
document.write("<br>");
document.write(arry4);
document.write("<br>");

// cancat and join 
var frt = ["apple", "mango", "banan"];
var name1 = ["ali", "zaka"];
var can = frt.concat(name1);
document.write(can + "<br>");
var join1 = frt.join(" /");
document.write(join1 + "<br>");


// slice and suplice 
var arry5 = ["ahmad", 20, "sultan", "harry", "chaina"];
var slice1 = arry5.slice(0, 4);
document.write("<br>");
document.write(slice1 + "<br>");

var arry6 = ["ahmad", 20, "sultan", "harry", "chaina"];
arry6.splice(2, 3, "anjan", "sajan");
document.write("<br>");
document.write(arry6 + "<br>");
// isArray
var checkary = Array.isArray(arry6);
document.write(checkary);

if (Array.isArray(checkary)) {
    document.write("this is an array");
}
else {
    document.write("this is an array");
}

// indexof and last indexof
var arry9 = ["ahmad", 20, "sultan", "ahmad", "chaina"];
var ind = arry9.indexOf("ahmad", 1);
document.write("<br>" + ind + "<br>");

var lind = arry9.lastIndexOf("ahmad", 2);
document.write("<br>" + lind + "<br>");

// include method/
var arry7 = ["ahmad", 20, "sultan", "harry", "chaina"];

var incld = arry7.includes("Ahmad");
document.write("<br>" + incld + "<br>");

// some every;
var arry8 = [44, 20, 41, 22, 11];
var sm = arry8.some(adult);
document.write("<br> this is soeme  " + sm + "<br>");

var ev = arry8.every(adult);
document.write("<br>  this is every     " + ev + "<br>");

function adult(age) {

    return age >= 20;
}


//  find and findeidex

var arry10 = [20, 44, 41, 22, 11];
var fnd = arry10.find(fun)
document.write("<br> find greater  " + fnd + "<br>");

var lfnd = arry10.findIndex(fun)
document.write("<br> find greater  " + lfnd + "<br>");

function fun(age) {
    return age >= 40;
}

// filter
var arry11 = [20, 44, 41, 22, 11];
var flt = arry11.filter(high);
document.write("<br>  " + flt + "<br>");

function high(newarry) {
    return newarry >= 30;
}

// toString value and fill
var arry12 = [20, 44, 41, 22, 11];
arry12.toString();
document.write("<br> " + arry12 + "<br>");

arry12.fill("ages");
document.write("<br> " + arry12 + "<br>");


// forEach
var arry13 = [20, 44, 41, 22, 11];
arry13.forEach(loop);

function loop(value, index){
    document.write("<br> " + index+ ") "+ value + "<br>");
}
// 2nd method
arry13.forEach(function(value, index){
    document.write("<br> " + index+ ") "+ value + "<br>");
});
// arrow fucntion
array.forEach(element => {
    document.write("<br> " + element + "<br>");
});

// for in 
// let fruit3=["apple","mango","banan","santraa"];

// for( var forin in fruit3);
// alert(fruit3[forin]);

// // for of
// for(var frof of fruit3);
// alert(fruit3);

// Object section/////////////////////

