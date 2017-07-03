var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor	= pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(i=0; i<squares.length; i++) {
	//create color scheme
	squares[i].style.backgroundColor = colors[i];

	//grab color of clicked square
	squares[i].addEventListener("click", function(){
		var clickedBackground = this.style.backgroundColor;

		//if color matches, execute this
		if (clickedBackground === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColor(pickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		

	});
}

//Create function that loops through all squares
function changeColor(color) {
	//Changes all squares to picked color
	for(i=0;i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Pick random color between 0 - 1
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

