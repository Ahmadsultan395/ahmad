var a ={
fname:"ahmad",
lname:"sultan",
age:  23,
gmail:"ahmad@gmail.com",
movies: ["lucky","dhoom","ajy"],

salary: function(){
    return 2400;
},

fulname:function(){
    return this.fname +" "+ this.lname;
}
};

document.write(a +"<br>");
document.write(a.fname+a.lname +"<br>" );
document.write(a.movies[0] +"<br>");
document.write(a.fulname() +"<br>");
// 2nd method 

var b  =new Object();
 b.fullname ="ahmad sultan";
 b.ages=23;
 b.fruit="apple";

 document.write(b);
 document.write(b.fruit);
//   array of abject`

var ary=[

{name:'ahmad',age :23},
{name:'ahad',age :33},
{name:'aden',age :13},
];

for(var i=0; i<ary.length; i++){
    document.write(ary[i].name+" "+ary[i].age + "<br>");
} 


// map//////////////////
var ary2=[

    {name:'ahmad',age :23},
    {name:'ahad',age :33},
    {name:'aden',age :13},
    ];

    var ary3 =[10,20,30];
    var mpv =ary3.map(multi);
    document.write("<br>"+ mpv + "<br>");

    function multi(x){
        return x*10;
    }

    var nmp = ary2.map(namef);
    document.write("<br>"+ nmp + "<br>");
    function namef(x){

        return x.name +" -"+ x.age;
    }