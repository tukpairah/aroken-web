function checkWord() {
  let userInput = document.getElementById("userInput").value.toLowerCase();

  if (userInput === "javascript" || userInput === "kwork" || userInput === "figma") {
    alert("Угадал! Правильно! :)");
  } else {
    alert("Увы, но нет. Попробуй ещё раз.");
  }
}