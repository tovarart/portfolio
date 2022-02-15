var start = document.getElementById('startBtn');
var suit = ["hearts", "clubs", "spades", "diamonds"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var worth;
var totalHand = [];

function startGame() {

    dealerHand();
    playerHand();
    //compareHands();

}

function dealerHand(createSuit, createValue) {

    function card1(createSuit, createValue) {

        var createSuit = suit[Math.floor(Math.random() * suit.length)];
        var createValue = values[Math.floor(Math.random() * values.length)];


        console.log(createSuit + createValue);
    
        function createWorth(createValue) {
            worth = parseInt(createValue);
            //console.log("Reg card is: " + createValue);

            if (createValue == "J" || createValue == "Q" || createValue == "K" ) {
                worth = 10;
                //console.log("Royal card: " + createValue);

            } if (createValue == "A") {
                var aceValue = Math.round(Math.random());

                if (aceValue == 1) {
                    worth = 11;
                } else {
                    worth = 1;
                }

                //console.log("Ace");
            }
            console.log("Card worth is: " + worth);
        }

        createWorth(createValue);

        //document.getElementById("suit1").innerHTML = createSuit;
        document.getElementById("value1").innerHTML = createValue;
        document.getElementById('firstCardDealer').classList.add(createSuit);

    }

    card1(createSuit, createValue);

    function card2(createSuit, createValue) {

        var createSuit = suit[Math.floor(Math.random() * suit.length)];
        var createValue = values[Math.floor(Math.random() * values.length)];

        console.log(createSuit + createValue);
    
        function createWorth(createValue) {
            worth = parseInt(createValue);
            //console.log("Reg card is: " + createValue);

            if (createValue == "J" || createValue == "Q" || createValue == "K" ) {
                worth = 10;
                //console.log("Royal card: " + createValue);

            } if (createValue == "A") {
                var aceValue = Math.round(Math.random());

                if (aceValue == 1) {
                    worth = 11;
                } else {
                    worth = 1;
                }

                //console.log("Ace");
            }
            console.log("Card worth is: " + worth);
        }

        createWorth(createValue);

        //document.getElementById("suit1").innerHTML = createSuit;
        document.getElementById("value2").innerHTML = createValue;
        document.getElementById('secondCardDealer').classList.add(createSuit);

    }

    card2(createSuit, createValue);
}


function playerHand(createSuit, createValue) {

    function card1(createSuit, createValue) {

        var createSuit = suit[Math.floor(Math.random() * suit.length)];
        var createValue = values[Math.floor(Math.random() * values.length)];


        console.log(createSuit + createValue);
    
        function createWorth(createValue) {
            worth = parseInt(createValue);
            //console.log("Reg card is: " + createValue);

            if (createValue == "J" || createValue == "Q" || createValue == "K" ) {
                worth = 10;
                //console.log("Royal card: " + createValue);

            } if (createValue == "A") {
                var aceValue = Math.round(Math.random());

                if (aceValue == 1) {
                    worth = 11;
                } else {
                    worth = 1;
                }

                //console.log("Ace");
            }
            console.log("Card worth is: " + worth);
        }

        createWorth(createValue);

        //document.getElementById("suit1").innerHTML = createSuit;
        document.getElementById("value3").innerHTML = createValue;
        document.getElementById('firstCardPlayer').classList.add(createSuit);
    }

    card1(createSuit, createValue);

    function card2(createSuit, createValue) {

        var createSuit = suit[Math.floor(Math.random() * suit.length)];
        var createValue = values[Math.floor(Math.random() * values.length)];


        console.log(createSuit + createValue);
    
        function createWorth(createValue) {
            worth = parseInt(createValue);
            //console.log("Reg card is: " + createValue);

            if (createValue == "J" || createValue == "Q" || createValue == "K" ) {
                worth = 10;
                //console.log("Royal card: " + createValue);

            } if (createValue == "A") {
                var aceValue = Math.round(Math.random());

                if (aceValue == 1) {
                    worth = 11;
                } else {
                    worth = 1;
                }

                //console.log("Ace");
            }
            console.log("Card worth is: " + worth);
        }

        createWorth(createValue);

        //document.getElementById("suit1").innerHTML = createSuit;
        document.getElementById("value4").innerHTML = createValue;
        document.getElementById("secondCardPlayer").classList.add(createSuit);
    }

    card2(createSuit, createValue);
}

function drawCard() {
    dealerAddCard();
    playerAddCard();
}

function dealerAddCard(createSuit) {
    var createSuit = suit[Math.floor(Math.random() * suit.length)];
    var createValue = values[Math.floor(Math.random() * values.length)];
    var div = document.createElement('div');
    var h = document.createElement("H2");
    var type = document.createTextNode(createValue);
    h.appendChild(type);

    div.setAttribute('class', createSuit);
    div.appendChild(h);

    document.getElementById("dealerHand").appendChild(div);
    
}

function playerAddCard(createSuit) {
    var createSuit = suit[Math.floor(Math.random() * suit.length)];
    var createValue = values[Math.floor(Math.random() * values.length)];
    var div = document.createElement('div');
    var h = document.createElement("H2");
    var type = document.createTextNode(createValue);
    h.appendChild(type);

    div.setAttribute('class', createSuit);
    div.appendChild(h);

    document.getElementById("playerHand").appendChild(div);
    
}