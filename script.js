/*Tyler Eikenberg****
******************************************
This code will simulate 
the card game War in the console.
*******************************************/


/*Take mainDeck and randomize the position of all the values within the array
The shuffleCards function takes an array passed through it and reposositions
all the values inside to random indexes.
@Param an array*/
const shuffleCards = (array) => {
	let currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}



/* 
The setupGame function 
returns an initial game state.
*/
const setupGame = () => {

/*	Create an array that will hold 52 values. This will be the main card deck.
	Card values are 2,3,4,5,6,7,8,9,10, Jack, Queen, King, and Ace.
	Jack = 11
	Queen = 12
	King = 13
	Ace = 14
	There are four of each individual card.*/
	const mainDeck = [2,2,2,2,
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

	shuffleCards(mainDeck);
	console.log("The cards have been shuffled.");

/*	Returning initial game with two randomized hands. 
	Current phase is draw.*/
	return {
		playerOne: mainDeck.slice(0,26),
		playerTwo: mainDeck.slice(26,53),
		currentState: 'draw',
		winner: null
	};

}

	//Game begins
let gameState = setupGame();

//While game has no winner this while loop will run
//If case is draw initiate draw function
//if case is waiting initiate waiting function
//if there is a winner exit loop
while(!gameState.winner){
	console.log(gameState);
	switch(gameState.currentState){
		case 'draw':
		console.log("Drawing cards")
		 // do something to draw cards
		 // gameState = drawCards(gameState);
		 setTimeout(() => {gameState.currentState = 'waiting';}, 10000)
		 break;
	 	case 'waiting':
		 // show please hit enter
		 window.alert('hello');
		 //window.addEventListener('keydown', e => { 
		 //	
		 //})
		 gameState.currentState = 'draw';
		 break;
		 case 'winner': true;
		 default:
		 break;
	}
}
