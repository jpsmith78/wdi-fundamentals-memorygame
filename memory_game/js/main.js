
var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []

var checkForMatch = function() {
	if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("you found a match!");
	} else {
		console.log("Sorry, try again.");
	} 
	};
};

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(1);