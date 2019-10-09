//Tyler Eikenberg****
// ******************************************
// This code will simulate 
// the card game War in a 
// websites console window.
// ******************************************




//Create an array that will hold 52 values. This will be the main card deck.
//Card values are 2,3,4,5,6,7,8,9,10, Jack, Queen, King, and Ace.
//Jack = 11
//Queen = 12
//King = 13
//Ace = 14
//There are four of each individual card.
let mainDeck = [2,2,2,2,
				3,3,3,3,
				4,4,4,4,
				5,5,5,5,
				6,6,6,6,
				7,7,7,7,
				8,8,8,8,
				9,9,9,9,
				10,10,10,10,
				11,11,11,11,
				12,12,12,12,
				13,13,13,13,
				14,14,14,14];

//
//Take mainDeck and randomize the position of all the values within the array
//The shuffleCards function takes an array passed through it and reposositions
//all the values inside to random indexes.
//@Param an array
function shuffleCards(array){
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

shuffleCards(mainDeck);
console.log("The cards have been shuffled.");

//Define two arrays to represent two players seperate deck of cards
//that they will use for the game.
