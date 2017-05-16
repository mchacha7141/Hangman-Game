// This array holds the words we are going to choose from.
// Feel free to add new words!
var words = ['falcons', 'panthers',  'patriots', 'chargers', 'saints'];

function chooseWord () {
  return words[Math.floor(Math.random() * words.length)];
}
var spacesArray = [];
function blanksFromAnswer ( word ) {
  var line = " _ ";
  var wordArray = word.split("");
  
  for ( i = 0; i < wordArray.length; i++ ) {
    spacesArray.push(line);
  }
  return spacesArray;
}

function alterAt ( n, c, originalString ) {
  return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}
function guessLetter( letter, shown, answer ) {
  var checkIndex = 0;

  checkIndex = answer.indexOf(letter);
  while ( checkIndex >= 0 ) {
      shown = alterAt( checkIndex, letter, shown );
      checkIndex = answer.indexOf(letter, checkIndex + 1);
  }
  return shown;
}
var answerWord = chooseWord();
document.getElementById("wordCount").innerHTML = blanksFromAnswer(answerWord).join("")
// document.getElementById("wordCount").innerHTML = "TESTING!";
document.getElementById("WORD").innerHTML = answerWord;


var userKeyElement = document.getElementById("userKey");
var keysPressed = [];
var correctGuesses = [];

 document.onkeyup = function (event) {
    var userKey = event.key;
    // console.log(keysPressed);

    if (keysPressed.indexOf(userKey) === -1 ) {
      keysPressed.push(userKey);
      // console.log(keysPressed);
      userKeyElement.innerHTML = keysPressed.join(', ');

      for (var i = 0; i < answerWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        if ((userKey === answerWord[i]) && (correctGuesses.indexOf(userKey) === -1)) {
          // Push the newly guessed letter into the correctGuesses array.
          correctGuesses.push(userKey);
          console.log("Correct Guesses " + correctGuesses.join(", "));
        }
      }
    }
}
 

var blanksResult = blanksFromAnswer(answerWord);


