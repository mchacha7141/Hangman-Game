// This array holds the words we are going to choose from.
// Feel free to add new words!
var words = ['falcons', 'panthers',  'patriots', 'chargers', 'saints'];

function chooseWord () {
  return words[Math.floor(Math.random() * words.length)];
}

function blanksFromAnswer ( word ) {
  var line = " _ ";
  var wordArray = word.split("");
  var html = "";
  for ( i = 0; i < wordArray.length; i++ ) {
    html = html + line;
  }
  return html;
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
document.getElementById("wordCount").innerHTML = blanksFromAnswer(answerWord);
// document.getElementById("wordCount").innerHTML = "TESTING!";
document.getElementById("WORD").innerHTML = answerWord;

var userKeyElement = document.getElementById("userKey");
var keysPressed = [];

document.onkeyup = function (event) {
    var userKey = event.key;
  keysPressed.push(userKey);

    userKeyElement.innerHTML = keysPressed.join(', ');
}


var blanksResult = blanksFromAnswer(answerWord);


