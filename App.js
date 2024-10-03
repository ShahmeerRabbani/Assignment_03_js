// Question no 01

function Question01() {
  var letters = prompt("Enter your sentence or word");
  // var vowels = ['a', 'e', 'i', 'o', 'u']
  var vowelsCount = 0;
  var letterCount = 0;

  for (let i = 0; i < letters.length; i++) {
    if (
      letters[i] === "a" ||
      letters[i] === "e" ||
      letters[i] === "i" ||
      letters[i] === "o" ||
      letters[i] === "u"
    ) {
      vowelsCount++;
    } else {
      letterCount++;
    }
  }

  alert(`There are ${vowelsCount} Vowels \n There are ${letterCount} letters`);
}


function Question02(){

    
    const sentence = prompt("Enter a sentence:");
    let wordCount = 0;
let inWord = false;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
        if (!inWord) {
      wordCount++;
      inWord = true;
    }
} else {
    inWord = false;
}
}

alert(`Word count: ${wordCount}`);
}