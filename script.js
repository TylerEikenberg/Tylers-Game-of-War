/****Tyler Eikenberg****
******************************************
This code will simulate 
the card game War in the console.
*******************************************/

/*The shuffleCards function takes an array of cards and 
randomize the position of all the values within it. 
@Param an cards*/
function shuffleCards(cards){
	let currentIndex = cards.length, temporaryValue, randomIndex;
	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = temporaryValue;
	}
}

class Card {
	constructor(suit, rank, score) {
		this.suit = suit;
		this.rank = rank;
		this.score = score;
	}
}

/*
class Deck creates a new deck of cards.
the method createDeck holds a for loop that creates a new deck of randomized cards
 */
class Deck{
	constructor(){
		this.length = 52;
		this.cards = [];
        this.createDeck();
	}

  createDeck(){
    let suit = ["hearts", "spades", "clubs", "diamonds"]
		let rank = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]
		let score = [2,3,4,5,6,7,8,9,10,11,12,13,14]
    for(let i = 0, j = 0, k = 0; i < 52; i++){
      if(j === 13){
        j = 0;
        k++;
      }
      let card = new Card(suit[k], rank[j], score[j]);
      this.cards.push(card);
      j++;

    }
  }
}

/* 
The setupGame function 
returns an initial game state.
*/
const setupGame = () => {

	/*	
	The following code block 
	delays code for a few seconds 
	then shuffles the cards
	using the shuffleCard function 
	passing the mainDeck as the parameter.
	*/
	// console.log("Shuffling cards");
	// setTimeout(function(){
 //         console.log(".")},1000);
	// setTimeout(function(){
 //         console.log(".")},2000);
	// setTimeout(function(){
 //         console.log(".")},3000);
	//Shuffle mainDeck*******************
	const mainDeck = new Deck();
	shuffleCards(mainDeck.cards);

	// setTimeout(function(){
 //         console.log("The cards have been shuffled")},4000);

	

	/*	
	Returning initial game with two randomized hands;
	one for each player. 
	Current phase is drawingCards.
	Initialize spoilsOfWar array that will hold cards during war
	*/
	return {
		playerOne: mainDeck.cards.slice(0,26),
		playerTwo: mainDeck.cards.slice(26,53),
		currentState: 'drawingCards',
		winner: null,
		warDrawAmount: 1,
		spoilsOfWar: []
	};

}


/**
 * beginWar takes 3 parameters. The original cards the both players played in
 * the round before war began, and the current game state.
 * beginWar compares one new card from each players deck and
 * determines a winner. The winner then takes the entire array spoilsOfWar 
 * 
 */
const beginWar = (originalp1card, originalp2card, state) => {

	
	const player1WarPile = state.playerOne.splice(0, state.warDrawAmount + 1);
	const player2WarPile = state.playerTwo.splice(0, state.warDrawAmount + 1);
	
	/*	
	 Create a new array spoilsOfWar that will hold previous cards
	in play, and one new card from playerOne deck and playerTwo deck
	*/	
	state.spoilsOfWar = [
		...state.spoilsOfWar,	 
		...player1WarPile, 
		...player2WarPile,
	];

	if(originalp1card){
		state.spoilsOfWar.push(originalp1card);
	}

	if(originalp2card){
		state.spoilsOfWar.push(originalp2card);
	}


	let p1card = player1WarPile[player1WarPile.length - 1];
	let p2card = player2WarPile[player2WarPile.length - 1];


	if(!p1card){
		state.winner = 'Player Two';
		return state;
	}
	if(!p2card){
		state.winner = 'Player One';
		return state;
	}
	if (p1card.score > p2card.score){
		console.log("WAR - Player One Wins!")
		state.playerOne = state.playerOne.concat((state.playerOne.length -1), state.spoilsOfWar);
		state.spoilsOfWar = [];
	//if playerTwo wins
	} else if (p1card.score < p2card.score){
		console.log("WAR - Player Two Wins")
		state.playerTwo = state.playerTwo.concat((state.playerTwo.length -1), state.spoilsOfWar);
		state.spoilsOfWar = [];
	//if there is a tie
	} else if (p1card.score === p2card.score){
		console.log("WAR - WAR AGAIN")
		state = beginWar(null, null, state);
	}


	return state;
}


/*
	The compareCards function takes one card from each players decks
	and sets them into the variables p1card and p2card. Then, using an if else if 
	statement, the values of p1card and p2card are compared. 
	If a players card value if larger then the others then both cards are pushed
	into the winning players array of cards.
 */
const compareCards = (state) => {
	let p1card = state.playerOne.shift();
	let p2card = state.playerTwo.shift();

	// console.log(`Player 1: ${p1card.rank} of ${p1card.suit}`)
	// console.log(`Player 2: ${p2card.rank} of ${p2card.suit}`)

	//if playerOne wins
	if(p1card.score > p2card.score){
		console.log("Player One Wins!")
		state.playerOne.push(p1card, p2card);
	//if playerTwo wins
	} else if(p1card.score < p2card.score){
		console.log("Player Two Wins")
		state.playerTwo.push(p1card, p2card);
	//if there is a tie
	} else if (p1card.score === p2card.score){
		console.log("War!")
		state = beginWar(p1card, p2card, state);
	}

	return state;
}


//Define variable gameState using setupGame to start a new game.
let gameState = setupGame();


/* 
While game has no winner this while loop will run
If case is draw initiate draw function
if case is waiting initiate waiting function
if there is a winner exit loop
*/

let runs = 0;
const MAX_RUNS = 1000;

while(!gameState.winner && runs <= MAX_RUNS){
	switch(gameState.currentState){
		 // call drawingCards function to remove the first
		 // card from each players decks and
		 // places it into the field of play
		 // gameState = drawingCards(gameState);

		 // Game phase
		case 'drawingCards':
			// console.log("Drawing cards");
			gameState = compareCards(gameState);
			gameState.currentState = 'checkWinner'
			break;

		// Checking winner phase
	 	case 'checkWinner':
	 		console.log(gameState.playerOne.length, gameState.playerTwo.length);
		 	if(gameState.playerOne.length === 0){
		 		gameState.winner = 'Player Two';
		 	} else if(gameState.playerTwo.length === 0){
				gameState.winner = 'Player One';
		 	} else {
		 		gameState.currentState = 'drawingCards'
		 	}
		 	break;
 	}
 	console.log(runs);
 	runs++;
 }
if(!gameState.winner){
	window.alert(`After 1,000 games nobody wins!`)
}else(window.alert(`${gameState.winner} wins!`))


/* 
The drawingCards state of the game will shift 1 card out of 
both players arrays and into a new array cardsInPlay. 
*/
/*
The cardsInPlay array will only ever hold two values:
The card from Player1 and the card from Player2
 */
/*
Function compareCards will take an array as a parameter and
compare the two cards. After the cards are compared either a winner
is decided or War begins.
 */
