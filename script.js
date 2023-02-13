/* Declare variables below to save the different sections (divs) of your story*/
       
 let button1 = document.querySelector(".option-one");
let gameDiv = document.querySelector(".option-one-screen");

let button2= document.querySelector(".option-two");
let studyDiv =document.querySelector(".option-two-screen");

let button3= document.querySelector(".option-one-end");

let button4=document.querySelector(".option-two-end");

button1.onmouseover=function(){
 button3.style.display="block";
 gameDiv.style.display="block";
 };



button2.onclick=function(){
 button4.style.display="block";
studyDiv.style.display="block";
 };

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


