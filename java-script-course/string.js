var str = "this is a js page";
var str2 =" this is my name"
document.write(str.length +"<br>");
document.write(str.toLowerCase() +"<br>");
document.write(str.toUpperCase() +"<br>");
document.write(str.includes("js") +"<br>");
document.write(str.endsWith("e") +"<br>");
document.write(str.startsWith("t") +"<br>");
document.write(str.search("js") +"<br>");
document.write(str.match("js") +"<br>");
document.write(str.match(/s/g) +"<br>");
document.write(str.indexOf("js") +"<br>");
document.write(str.indexOf("i") +"<br>");
document.write(str.lastIndexOf("js") +"<br>");
document.write(str.replace("js","php") +"<br>");
document.write(str.replace(/s/g,"t") +"<br>");
alert(str);
var a= str.trim()
document.write(a+"<br>");
alert(a);
var c= str.concat(str2);
document.write(c +"<br>");
document.write(c.split("e") +"<br>");
document.write(str.repeat(4) +"<br>");
var sli= str.slice(-1);
document.write("<br>"+ sli +"<br>");

