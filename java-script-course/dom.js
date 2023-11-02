var element;

// var a= document;
// console.log(a +"<br>");   
// element=document.all;
// console.log(element);
// elemet = document.head;
// console.log(elemet);
// elemet = document.links;
// console.log(elemet);
// elemet = document.images;
// console.log(elemet);
// elemet = document.URL;
// console.log(elemet);
// elemet = document.domain;
// console.log(elemet);

// how to get the value 
// var c =document.getElementById("header").innerText;
// document.write(c +"<br>");
// var d =document.getElementById("header").innerHTML;
// document.write(d +"<br>");
// var e= document.getElementById("header").getAttribute("onClick");
// document.write(e +"<br>");
// // var f= document.getElementById("header").getAttributeNode("style").value;  
// document.write(f +"<br>");
// var g= document.getElementById("header").attributes[0].name;
// document.write(g +"<br>");

// // how to set the value 

// document.getElementById("header").innerText="How to learn PHP";
// var h =document.getElementById("header").innerText;
// document.write(h);

// document.getElementById("header").innerHTML="<h1>How to learn PHP</h1>";
// // var i =document.getElementById("header").innerHTML;
// // document.write(i);

// document.getElementById("header").setAttribute("class","text");
// var j= document.getElementById("header").getAttribute("class");
// console.log(j);

// // document.getElementById("header").removeAttribute("style")
 
// var l = document.querySelectorAll("ul")[1].innerText;
// document.write(l);
// console.log(l);

// // var m = document.querySelectorAll("#header h1").innerText;
// // document.write(m);
// // console.log(m);
//  var n= document.getElementById("header");
// //   onclick =click;
 
//   function show(){
//     document.getElementById("ultag").style.display="block";
//     document.getElementById("ultag1").style.display="none";
//     document.getElementById("header").style.display="none";   
    
//   }

  // styling method 

//   var sty;
//   document.querySelector("#header").style.color="blue";
//   sty=document.querySelector("#header").style;
//   document.write(sty);
  
//   // clas name ya bus un k name retune krta
//   var cls;
//   document.querySelector("#header").className="abcde";
//  cls = document.querySelector("#header").className;
// document.write(cls);
// console.log(cls);
 

//   // claslist :ya name k arry retune krta h 

// var dd; 
//  document.querySelector("#header").classList.add("hgt","fgt");
// dd= document.querySelector("#header").classList;
// console.log(dd);
// remove class
// document.querySelector("#header").classList.remove("xyz");
// var gg = document.querySelector("#header").getAttribute("class");
// console.log(gg);

// click fuction without going in html file 
// $
// remove the add clik listener 
//  element=document.querySelector("#header");


//  element.addEventListener("mouseleave",changeclr);
//  element.addEventListener("mouseleave",textclr);
//  element.addEventListener("click",del);

//  function changeclr(){
//   element.style.backgroundColor="blue";
//   };
//   function textclr(){
//     element.style.color ="white";
//     };
//     function del(){
//       document.querySelector("#header").removeEventListener("mouseleave",changeclr);
//     };

    // function with caption use

//     element=document.querySelector("#header",);
//     var dddd = document.querySelector("#inner");

//  element.addEventListener("click",changeclr,true);
//  dddd.addEventListener("click",textclr);

//  function changeclr(){
//   alert("color change ");
//   };
//   function textclr(){
//     alert('changing of the text color')
//     };

// tooooooooooooooooooooooooooooooooogle
// ============================

// element=document.querySelector("#ultag1").addEventListener("click",chg);

// function chg(){
//   document.querySelector("#ultag1").classList.toggle("ahmad");
// }


// =============
// item
// var chhh=document.querySelector("#header").classList.item(2);
// console.log(chhh);

// ===========================contain
// var chhh=document.querySelector("#header").classList.contains("xy");
//  console.log(chhh);

// =================================
// create element text and comment
var newelement = document.createElement("p");
var newtext = document.createTextNode("this is a dom content");
var commnet = document.createComment("hide this file ");

// document.write(newelement);
// document.write(newtext);
// document.write(commnet);

// console.log(newtext);
// console.log(newelement);
// console.log(commnet);


// newelement.appendChild(newtext);
// var dddddd = document.querySelector("#ultag1").appendChild(newelement);
// var cmt = document.querySelector("#ultag1").appendChild(commnet);
// document.write(dddddd+" "+cmt);

// var ins = document.querySelector("#ultag1");
// ins.insertBefore(newelement,ins.childNodes[0]);
// // document.write(ins);
// =============================
// use of insert element
// newelement.appendChild(newtext);

// var lll= "<h1> this is a new page of ava script</h1>";
// var target = document.querySelector("#ultag1");
// target.insertAdjacentHTML("afterend",lll);
// =============================

// var newe = document.createElement("li");
// var newt = document.createTextNode("mehar ali shah");

// newe.appendChild(newt);

// var target = document.querySelector("#ultag1");
// var oldelement = target.children[0];

// target.removeChild(oldelement);
// ==============================================
// clone
// var newe2 =document.querySelector("#ultag1").children[0];
// var yes = document.querySelector("#ultag1");
// var checkid = yes.hasChildNodes();
// console.log(checkid);
// var teg = newe2.cloneNode(true);

// var tag11= document.querySelector("#ultag");

// var apnd = tag11.appendChild(teg);
// ====================================
