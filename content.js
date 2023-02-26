
//fonction qui récupère les textes d'une page et met la moitié de chaque mot en gras

function boldHalfText() {

var text = document.body.innerText;

var words = text.split(" ");
for (var i = 0; i < words.length; i++) {

var halfWord = words[i].substring(0, words[i].length / 2);
words[i] = halfWord.bold() + words[i].substring(words[i].length / 2);

}

document.body.innerHTML = words.join(" ");

}

//appel de la fonction
boldHalfText();