//function that returns a random card
var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};

//function that returns dealers hand between 17-21
var dealerhand = function(17, 21) {
    card = Math.floor(Math.random()*(21 - 17 + 1)+17);
    return cardD; //should be return card;
}

//declaring variables
var card1 = deal();
var card2 = deal();
var dealer = dealerhand();
var x = 17;
var y = 21;

//retrieving the value of the cards from the deal function
var getValue = function(card) {

    if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12){
        return 10;   
    }
    if(card % 13 === 1){
        return 11;   
    }
    else{
        return card % 13;
    }
}


//scoring the cards dealt and determining the outcome
//using the if and else if statements    
function score() {

    if ((getValue(card1) + getValue(card2)) > 22){
        return "Busted!";
    }
    else if (getValue(cardDealer) > getValue(card1) + getValue(card2)){
        return "You lose!";
    }
    else if (getValue(cardDealer) === getValue(card1) + getValue(card2)){
        return "Draw!";
    }
    else{
        return getValue(card1) + getValue(card2);
    }
}

//Need to display results onto HTML page        
//alert("You have card " + card1 + " / " + card2 +
//        " Score: " + score(card1, card2);

javascript html blackjack 