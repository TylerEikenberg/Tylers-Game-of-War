# Tyler's Game of War
For this project we were required to replicate the card game __War__ using __JavaScript__.

## How to play "War"
In the card game __War__, a main deck of 52 card is shuffled and then distributed evenly  
between two players. Each player will start with __26__ cards. The game starts by  
each player drawing the __first__ card from the top of their deck and placing it face up  
next to the opposite players card. __Whoever has the card of the higher values wins.__  
The winning player then takes both cards in play and places them at the bottom of their deck.  
The game continues __until one player has all 52 cards.__
#
### When "War" is initiated
In the game, __"War"__ begins when both players put down a card of equal value. When this happens  
both players are required to pull __two new cards__ from their decks and place one face up and one  
face down in the playing field. Then the winner is determined by comparing the *new face up* cards.  
The winner of the "War" then takes __all cards currently in play__. 
#
# My game
In my JavaScript code I replicate the game by creating a card deck and randomizing it.  
The deck is then split between two players. Using a *switch* statement, the game switchs between  
states; __drawingCards__ and __checkWinner__. During the __drawingCards__ state a __compareCards__  
function is called that compares a card from each player against eachother and determines a winner.  
If there is a tie then war begins. In the __beginWar__ function the two previous cards in play  
are added to a new array __spoilsOfWar__ that will hold all of the cards that the winner of *war* will take  whenever they win. __spoilsOfWar__ also holds two new cards from each players decks,  
totaling *six* cards in the array. Then a card from each player is compared again to determine a winner.  If there is another tie, __war__ begins again until a winner is determined. 
