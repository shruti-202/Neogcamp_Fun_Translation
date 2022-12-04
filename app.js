var translateBtn = document.querySelector("#btn-translate");
translateBtn.addEventListener("click", function clickHandler() {
  console.log("Hi shru");
  var textInput = inputText.value; //Reading input
  // outputText.innerText = textInput; //Writing Input
  fetch(translatedUrl(textInput)) //calling the server
    .then((response) => response.json())
    .then((json) => {
      var translateText = json.contents.translated;
      outputText.innerText = translateText;
    });
});

var inputText = document.querySelector("#input-field");
var outputText = document.querySelector("#output-field");

var funUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

function translatedUrl(text) {
  return (
    "https://api.funtranslations.com/translate/ferb-latin.json" +
    "?" +
    "text=" +
    text
  );
}
