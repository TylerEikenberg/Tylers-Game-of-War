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
		this.draw = () => {
       		return this.cards[Math.floor(Math.random() * Math.floor(52))]
        }
        this.createDeck();

	}
  createDeck(){
    let suit = ["hearts", "spades", "clubs", "diamonds"]
		let rank = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "King", "Queen", "Ace"]
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

let mainDeck = new Deck;

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
	console.log("Shuffling cards");
	setTimeout(function(){
         console.log(".")},1000);
	setTimeout(function(){
         console.log(".")},2000);
	setTimeout(function(){
         console.log(".")},3000);
	//Shuffle mainDeck*******************
	shuffleCards(mainDeck.cards);

	setTimeout(function(){
         console.log("The cards have been shuffled")},4000);

	

	/*	
	Returning initial game with two randomized hands;
	one for each player. 
	Current phase is draw.
	*/
	return {
		playerOne: mainDeck.cards.slice(0,26),
		playerTwo: mainDeck.cards.slice(26,53),
		currentState: 'drawingCards',
		winner: null
	};

}




const beginWar = (state) => {
	/*	
	 Create a new array spoilsOfWar that will hold previous cards
	in play, and one new card from playerOne deck and playerTwo deck
	*/	
	let spoilsOfWar = [];
	spoilsOfWar.push(compareCards.p1card, compareCards.p2card);
	spoilsOfWar.push(gameState.playerOne.shift(), gameState.playerTwo.shift());

	/*
		Call compareCards() to then compare one new card pulled from
		the decks of playerOne and playerTwo
	 */
	return compareCards(state);
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
   // let p1card = new Card("Diamonds", "Two", 2)
   // let p2card = new Card("Diamonds", "Two", 2)
console.log(p1card,p2card)

//if playerOne wins
if(p1card.score > p2card.score){
	console.log("Player One Wins!")
	state.playerOne.push(p1card, p2card);
	state.currentState = 'waiting';
//if playerTwo wins
}else if(p1card.score < p2card.score){
	console.log("Player Two Wins")
	state.playerTwo.push(p1card, p2card);
	state.currentState = 'waiting';
//if there is a tie
}else if (p1card.score === p2card.score){
	console.log("War!")
	// beginWar();
	state.currentState = 'waiting';
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
let winner = null;
while(!gameState.winner){
	switch(gameState.currentState){
/*		 call drawingCards function to remove the first
		 card from each players decks and
		 places it into the field of play
		 gameState = drawingCards(gameState);*/

		 // Game phase
		case 'drawingCards':
			console.log("Drawing cards");
			gameState = compareCards(gameState);
			// debugger;
		 break;
		 // call waiting function to wait for user to hit
		 // enter key before drawing the next set of cards.
		 // gameState = waiting(gameState)

		// Checking winner phase
	 	case 'waiting':
/*		 show "Hit enter to continue"  
	*/
		 	if(gameState.playerOne.length === 0 || gameState.playerTwo.length === 0){
		 		winner = true;
		 	}else{
			 winner = false;
			}
			 gameState.currentState = winner ? 'winner' : 'drawingCards';
			 
		 break;

		 // Terminating condition
		 case 'winner':
		 	// TODO figure out who the actual winner is
		 	if(gameState.playerOne.length === 0){
		 		gameState.winner = 'playerOne';
		 	window.alert(`${gameState.playerTwo} wins!`)
		 	}else if(gameState.playerTwo.length === 0){
		 		gameState.winner = 'playerTwo';
		 		window.alert(`${gameState.playerOne} wins!`)
		 	}
		 
		 default:
		 break;
 	}
 }


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
