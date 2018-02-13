

var Wins = 0;
var Losses = 0;
var CurrentTotal = 0;
$("#currentNumber").html("Current Total: " + CurrentTotal);
$("#wins").html("Wins: " + Wins);
$("#losses").html("Losses: " + Losses);

function playGame() {



// sets the number that we want the player to equal 
var targetNumber = [Math.floor(Math.random() * (121 + 19)) + 1];
// displays the target number in the goalNumber div
$("#goalNumber").text(targetNumber);
// sets the numbers that the sword images will be assigned
var availableNumbers = [Math.floor(Math.random() * (13 + 1)) + 1, Math.floor(Math.random() * (13 + 1)) + 1, 
Math.floor(Math.random() * (13 + 1)) + 1, Math.floor(Math.random() * (13 + 1)) +1];
// creates a sword image for every available number
for (var i = 0; i < availableNumbers.length; i++) {
	// creates the image for every index of available numbers
	var swordImage = $("<img>");
	// assigns the swordImage class to every image it creates
	swordImage.addClass("swordImage");
	// attaches the image link to the image 
	swordImage.attr("src", "images/swordimg.jpg");
	// associates an available number with each image it creates
	swordImage.attr("data-swordNumber", availableNumbers[i]);
	// appends each sword image to the swords div
	$("#swords").append(swordImage);
}


$(".swordImage").on("click", function() {
	// grabs the swordNumber attribute we assigned each image when you click an image and turns
	//it into an integer(because html elements are strings)
	var swordNumberValue = ($(this).attr("data-swordNumber"));
	swordNumberValue = parseInt(swordNumberValue); 
	// adds the value of the image you clicked to the current number
	CurrentTotal += swordNumberValue;
	// displays the current total 
	$("#currentNumber").html("Current Total: " + CurrentTotal);
	// compares the current number to the goal number and alerts wether you won or lost
	if (CurrentTotal == targetNumber) {
		Wins++;
		$("#wins").html("Wins: " + Wins);
		$("#swords").empty();
		CurrentTotal = 0;
		$("#currentNumber").html("Current Total: " + CurrentTotal);
		playGame();
	}

	else if (CurrentTotal > targetNumber) {
		Losses++;
		$("#losses").html("Losses: " + Losses);
		$("#swords").empty();
		CurrentTotal = 0;
		$("#currentNumber").html("Current Total: " + CurrentTotal);
		playGame();
	}

});
}