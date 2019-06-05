// alert("connected");

var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[0];
var message = document.querySelector("#message");
var play = document.querySelector("#playGame");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var level = 6;
var background = document.querySelector(".background");


play.addEventListener("click", function(){
	play.textContent = "New Colors";
	message.textContent = "Pick A Color";
	playGame();
});
easy.addEventListener("click", function(){
	level = 3;
	for(var i = level; i < squares.length; i++){
		squares[i].style.display = "none";
	}
	playGame();
});
hard.addEventListener("click", function(){
	level = 6;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.display = "initial";
	}
	playGame();
});

function playGame(){
	//Generate Random colors and select pickedColor
	genRandomColor(level);
	//Add Click Listener to Squares
	addClickListener();
		
}

//Set incorrect square color to background color
function changeColor(color){
	for(var i = 0; i < squares.length; i++){
var num = Math.floor((Math.random() * 5) + 0);
//Add initial colors to squares
squares[i].style.backgroundColor = color;
	}
}
//Generate random color from the rgb color spectrum
function genRandomColor(num){
	//Set background color
	background.style.background = "purple";
	for(var i = 0; i < num; i++){
	//Pick random number between 0 & 255 for Red, green & blue
	//Red
	var red = Math.floor((Math.random() * 255) + 0);
	// Green
	var green = Math.floor((Math.random() * 255) + 0);
	//Blue
	var blue = Math.floor((Math.random() * 255) + 0);
	
	squares[i].style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
	}

	//Pick and set pickedColor based on colors displayed
	pickedColor = squares[Math.floor((Math.random() * num) + 0)].style.backgroundColor;
	document.querySelector("#rgb").textContent = pickedColor;

}
//Add Click Listener to Squares
function addClickListener(){
	//Add click listener to squares
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			//Grab color from clicked square
			var clickColor = this.style.backgroundColor;
			console.log(clickColor, pickedColor);
			//If square equals picked color player wins
			if(clickColor === pickedColor){
				changeColor(pickedColor);
				message.textContent = "You Win!";
				background.style.background = pickedColor;
				// alert("Player wins");
			}
			//else hide square
			// alert("Square Clicked");
			else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}
}

