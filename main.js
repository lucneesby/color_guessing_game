var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor	= colors[3];
var colorDisplay = document.querySelectorAll("#colorDisplay");
var messageDisplay = document.querySelector("#message");


for(i=0; i<squares.length; i++) {
	//create color scheme
	squares[i].style.backgroundColor = colors[i];

	//grab color of clicked square
	squares[i].addEventListener("click", function(){
		var clickedBackground = this.style.backgroundColor;

		//if color matches, execute this
		if (clickedBackground === pickedColor) {
			messageDisplay.textContent = "Correct";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		

	});
}

