/****Tyler Eikenberg****
******************************************
This code will simulate 
the card game War in the console.
*******************************************/


/*The shuffleCards function takes an array and 
randomize the position of all the values within it. 
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

	
	/*	
	The following code block 
	delays code for a few seconds 
	then shuffles the cards
	using the shuffleCard function 
	passing the mainDeck as the parameter.
	*/
	console.log("Shuffling cards");
	setTimeout(function(){
         console.log(".")},1000);
	setTimeout(function(){
         console.log(".")},2000);
	setTimeout(function(){
         console.log(".")},3000);
	//Shuffle mainDeck*******************
	shuffleCards(mainDeck);
	setTimeout(function(){
         console.log("The cards have been shuffled")},4000);

	

	/*	
	Returning initial game with two randomized hands;
	one for each player. 
	Current phase is draw.
	*/
	return {
		playerOne: mainDeck.slice(0,26),
		playerTwo: mainDeck.slice(26,53),
		currentState: 'drawingCards',
		winner: null
	};

}

//Define variable gameState using setupGame to start a new game.
let gameState = setupGame();


/* 
While game has no winner this while loop will run
If case is draw initiate draw function
if case is waiting initiate waiting function
if there is a winner exit loop
*/
while(!gameState.winner){
	switch(gameState.currentState){
		case 'drawingCards':
		console.log("Drawing cards");
		 // do something to draw cards
		 // gameState = drawCards(gameState);
		 break;
	 	case 'waiting':
		 // show please hit enter
		 window.alert('hello');
		 //window.addEventListener('keydown', e => { 
		 //	
		 //})
		 gameState.currentState = 'drawingCards';
		 break;
		 case 'winner': true;
		 default:
		 break;
	}
}
