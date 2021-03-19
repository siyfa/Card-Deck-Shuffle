// Declaring card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = ["Ace", "2","3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// The Deck - emtyp array 
let deck = [];

// creating a deck of cards
for (let i = 0; i < suits.length; i++){
    for(let x = 0; x < values.length; x++){
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// JS Random
function schuffleCard(){
    for (let i = deck.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}
// Validation 
var jsRandom = document.getElementById('jsRandom');
var xorshift = document.getElementById('xorshift');

jsRandom.addEventListener('click', function(){
    if(errorHandler()){return false;}         
    var start = new Date();
    var startTime = convertime(start.getTime())
    let table = "<table><tr><th colspan='2'>JS Random</th></tr>";
    table += "<tr><td>Start Time</td><td>"+startTime+"</td></tr>";
    var inputNum = document.getElementById('inputVal').value;
    for (let i = 0; i <inputNum; i++){    
        schuffleCard();
        let j = Math.floor(Math.random() * deck.length);
        let k = Math.floor(Math.random() * deck.length);
        console.log(`${deck[j].Value} of ${deck[k].Suit}`)
    }
    var end = new Date();
    var time = end.getTime() - start.getTime();
    

    var endTime = convertime(end.getTime())
    var totalTime = convertime(time)
    console.log(totalTime);

    table += "<tr><td>End Time</td><td>"+endTime+"</td></tr>";
    table += "<tr><td>Total Time</td><td>"+ totalTime +"</td></tr>";
    table += "</table>";
    document.getElementById('result').innerHTML += table;

})

xorshift.addEventListener('click', function(){
    errorHandler();
})
function convertime(ms){
    var mss = ms % 1000;
    ms = (ms - ms) / 1000;
    var secs = ms % 60;
    ms = (ms - secs) / 60;
    var mins = ms % 66;
    var hrs = (ms - mins) / 60;

    return hrs + ':' + mins + ':' + secs + '.' + mss;
}

// Validating Integger number input
function validInteger(input){
    var errormsg = document.getElementById('error');
    var cancelBtn = document.getElementById('cancelBtn');
    if(Number.isInteger(Number(input)) === false){
        errormsg.textContent = "Please enter a valid integer number";
        cancelBtn.style.display = "block";
        errormsg.style.display = "block";
    }
    cancelMsg();
}

// Handling functional errors and Validating
function errorHandler(){
    errors = [];
    var inputNum = document.getElementById('inputVal').value;
    var errormsg = document.getElementById('error');
    var cancelBtn = document.getElementById('cancelBtn');
    validInteger(inputNum);
    if (inputNum < 1 || inputNum > 10000 ){
        errormsg.textContent = 'Please enter a number between 0 to 10,000'
        errormsg.style.display = "block";
        cancelBtn.style.display = "block";
        return true;
    }
    cancelMsg();
    return false;
}

// Error message gandling 
function cancelMsg(){
    var errormsg = document.getElementById('error');
    cancelBtn.addEventListener('click', function(){
        this.style.display = "none";
        errormsg.style.display = "none";
    })
}