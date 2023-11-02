
// ===simple function
// function sum(a,b,d){
//     console.log(a+b+d);
// }
// sum(23,34,90);


// argumet============
function add() {
    let sum = 0;
    for (const key in arguments) {
        sum += arguments[key];
    }
    document.write(sum);
}
add(20, 40, 50, 60, 60, 48);
document.write("<br>");
// =====================rest operton
function nameage(name, ...age) {
    let sum = 0;
    for (const key in age) {
        sum += age[key];
    }
    document.write(name+" ");
    document.write(sum);
}
nameage('ahmad', 10,10,10,10);
// ======== spread operator/
document.write("<br>");
function spred(name, ...age) {
    let sum = 0;
    for (const key in age) {
        sum += age[key];
    }
    document.write(name+" ");
    document.write(sum);
}
let arr=[20,20,20,20];
nameage('ahmad',...arr );

// merge arry with spread operator 
ar1=[10,20,30];
ar2=[0,50];
ar3=["fisrt arry ",...ar1,"second arry ",...ar2];
document.write("<br>" +ar3);

// ===========object literal
var n="ahmad";
var obj={
    // name:n, //old method
    n, //new method
    [n+"sultan"]:"sultan",
    // old method
    fullname: function(){
        return `this ${this.ahmadsultan}'s fullname `;
    },
        // new method
        'add name'(){
            return `ahmad ${this.ahmadsultan} is aprofessstion hitter `;
        
    },

}
console.log(obj.fullname());
console.log(obj['add name']()); 
// ===
let fname ="ahmad";
let lname ="sultan";
let batch = 2019;

function namebatch(fname,lname,batch){
let fullname=fname+lname;
return {fullname , batch};
}
var s = namebatch(fname,lname,batch);
console.log(s.fullname);
console.log(s.batch);
console.log(namebatch(fname,lname,batch));

// destructure Array

// let Array =["ahmad",23,"bure"];
// let [name1,...arg]=Array;
// console.log(name1);
// console.log(arg[0]);
// console.log(arg[1]);

function user(){
   return ["ahmad",23,"bure",2019];
}
let [name,age,city,year] =user();
console.log(name);
console.log(year);

// destructure object same as arry but {} uses instead of []

let obj11 ={
    ffname:"ahmad sultan ",
    ages :23,
};

let {ffname,ages}= obj11;
console.log(ffname);

// =========================class

// class sms{
//     simple(){
//         document.write('<br>this is object two<br>');
//     }
//     constructor(fffname,lllname){
//         this.firstname=fffname;
//         this.secondname=lllname;
//         // document.write("<br> this is class calling");
//     }
//     helo(){
//         document.write(`<br>hello ${this.firstname} hello ${this.secondname} <br>`);
//     }
//     static fullahmadname(){
//         document.write("<br>hellow your are welcome sir to this javascript page");
//     }
// };

// let first = new sms("ahmad sultan","ali asghar");
// let second = new sms("imran","usama");
// first.helo();
// second.helo();
// // let object1 =new sms();
// let object2 = new sms;
// // object2.simple();
// // object1.firstname="ahmad";
// // object1.secondname="sultan";
// // object1.helo();
// // document.write(d);
// sms.fullahmadname();



// // ==============new class
// class message  extends sms{
//     constructor(name){
//         super();
//         this.fullname=name;
//         document.write("you are good man");
//     }
//     newhello(){
//         document.write("your father name " + this.fullname);
//     }

// };
//  let gg= new message();
//  gg.firstname="sunny ali";
//  gg.secondname="youtube";
//  gg.fullname="ahmad sultan";
//  gg.helo();
// gg.newhello();
document.write('<br>');


// inheritance using class concept====================================
class employee{
constructor(name,age,salary){
    this.employeename=name;
    this.employeeage=age;
    this.employeesalary=salary;
    
}
Eprint(){
document.write(`<h2>Employee data</h2> <br>
                NAME: ${this.employeename}<br>
                AGE : ${this.employeeage}<br>
                SALARY : ${this.employeesalary}<br>`);
}
}



class manager extends employee{
   
    Mprint(){
let fule=2000;
let rent=2000;
let totalsalary=fule+rent+this.employeesalary;

    document.write(`<h2>Employee data</h2> <br>
                    NAME: ${this.employeename}<br>
                    AGE : ${this.employeeage}<br>
                    SALARY : ${totalsalary}<br>`);
    }
    
}
let one= new employee("Muhammad Ahmad",23,10000);
let two =new manager("Ahad sultan",25,10000)
one.Eprint();
two.Mprint();

// ================importing file 

