//NOTE - Values for cards
//2-10 are the resepective numbers
//11 - J, 12 - Q, 13 - K, 14 - A
function deckInitialize(){//I didnt feel like writing all the cards for some reason 
    let deck = [];
    for(var i = 0; i < 4; i++){
        for(var n = 2; n < 15; n++){
            deck.push(n);//suits ingnored since they aren't important to the game
        }
    }
    return(deck);
}

deck = deckInitialize();//again i dont know why I didnt just type out the deck once 
console.log(deck); //debug for checking

function shuffleDeck(deck){ //randomizes deck into 2, 26 card hands
    let hand1 = [];
    let hand2 = [];
    var n = 0;
    for(var i = 0; i < 26; i++){//each hand gets one card per iteration
        n = Math.floor(Math.random() * deck.length);//random
        hand1.push(deck[n]);
        deck.splice(n, 1);

        n = Math.floor(Math.random() * deck.length);
        hand2.push(deck[n]);
        deck.splice(n, 1);
    }
    return[hand1, hand2];//return as array of arrays
}
let hands = shuffleDeck(deck);
console.log("shuffled hands:\n" + hands[0] +"\n"+ hands[1]); //debug for checking

function displayWinner(score){
    if(score[0] + score[1] + score[2] != 26){
        console.log("impossible outcome"); //bugchecking for wrong amount of turns
    }if(score[0] > score[1]){//p1 wins      
        console.log("Player 1 beat Player 2 with a score of: " + score[0] + " to " + score[1])
    }if(score[0] < score[1]){//p2wins
        console.log("Player 2 beat Player 1 with a score of: " + score[0] + " to " + score[1]);
    }if(score[0] == score[1]){
        console.log("Tie Game:"+ score[0] + " to " + score[1])
    }
    console.log("there were "+ score[2] + " tied hands");
}

function runGame(hands){
    var hand1 = hands[0];
    var hand2 = hands[1];
    let score = [0, 0, 0];
    for(var i = 0; i < 26; i++){
        var card1 = hand1[hand1.length - 1];
        hand1.pop();
        var card2 = hand2[hand2.length - 1];
        hand2.pop();

        if(card1 > card2){
            score[0]++;
            console.log(card1 +" > "+ card2);
        }if (card1 < card2){
            score[1]++;
            console.log(card1 +" < "+ card2);
        }if(card1 == card2){
            console.log("Tie")
            score[2]++;//amount of ties
        }
    }
    displayWinner(score);
}
runGame(hands);
