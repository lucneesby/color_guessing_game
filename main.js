
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();	
	gameLogic();
	reset();
}

function setUpModeButtons(){
		for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;


			reset();
		});
	}
}

function gameLogic() {
	for(i=0; i<squares.length; i++) {
		//grab color of clicked square
		squares[i].addEventListener("click", function(){
			var clickedBackground = this.style.backgroundColor;

			//if color matches, execute this
			if (clickedBackground === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColor(clickedBackground);
				h1.style.backgroundColor = clickedBackground;
				//change button to "play again?"
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
			

		});
	}
}

function reset() {
	//change button to "New Colors"
	resetButton.textContent = "New Colors";
	//generate all colors
	colors = generateRandomColors(numSquares);
	//pick new random color of array
	pickedColor = pickColor();
	//change color display to math picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (i=0;i<squares.length;i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//reset h1
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});


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

function generateRandomColors(num) {
	//make array
	var arr = [];
	//repeat num times
	for (i=0;i<num;i++) {
		arr.push(randomColor());
		//add num random colors to array
	}
	//return array at very end
	return arr;
}

function randomColor() {
	//get a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//get a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//get a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue +")";
}



