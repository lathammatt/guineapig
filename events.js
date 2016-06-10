
//eventhandlers for
//all sections
//mouse over for h1 tag
//output-target
//all four buttons

var clickSection = document.getElementsByClassName("article-section");
console.log(clickSection);

var colorBlue = document.getElementById("add-color")
var bruceBann = document.getElementById("make-large")
var cage = document.getElementById("add-border")
var rounded = document.getElementById("add-rounding")
var ginny = document.getElementById("guinea-pig");


var output = document.getElementById("output-target");

var introText = document.getElementById("intro");
var sadheader = document.getElementById("page-title");
var userInput = document.getElementById("keypress-input");



//----------handlers-----------

colorBlue.addEventListener("click", function goBlue(){
	ginny.classList.toggle("blue");
});

bruceBann.addEventListener("click", function goBig(){
	ginny.classList.toggle("hulk");
});

cage.addEventListener("click", function goCage(){
	ginny.classList.toggle("cage");
});

rounded.addEventListener("click", function goRound(){
	ginny.classList.toggle("trimmed");
});

userInput.addEventListener("keyup",function addText(){
	output.innerHTML = `${userInput.value}`;
});

sadheader.addEventListener("mouseout", function goodBye(){
	output.innerHTML = "You left me!!";
});

sadheader.addEventListener("mouseover", function goodBye(){
	output.innerHTML = "You moved your mouse over the header";
});

// introText.addEventListener("click", function changeText(){
// 	output.innerHTML = "You clicked on the Introduction section.";
	
// });

// if ("click" && "article-section") {
// 	output.innerHTML = "You clicked on the `${this.innerHTML}` section.";
// };

// outputEl = document.getElementById("")
// articleEL = document.GEBClassName
function handleSectionClick(MouseEvent){
     var elementText = MouseEvent.target.innerHTML;
    	output.innerHTML = "You clicked on " + elementText + " section";};
for (var i = 0; i < clickSection.length; i++){
     clickSection.item(i).addEventListener("click", handleSectionClick);};
 


//------------from notes----------

// document.getElementById(“article-section”).addEventListener(“click”, function (click){
//      console.log (“clickEvent”, clickEvent.target);
//      console.log(“clickEvent”, clickEvent.currentTarget);

//      clickEvent.target.classList.toggle(“bordered”)});