var titles = [
    "Cada animal tem uma história,<br>ajude a escrever um final feliz",
    "Adote, salve uma vida e ganhe um amigo fiel.", 
    "Adote amor, salve vidas.",
    "Com amor e cuidado, transformamos a vida de animais abandonados.", 
    "Nossa missão é proteger e cuidar dos animais, um de cada vez."
];
var currentIndex = 0;

function changeTitle(elementIds) {
    elementIds.forEach(function (elementId) {
      var titleElement = document.getElementById(elementId);
  
      titleElement.style.opacity = 0;
  
      setTimeout(function () {
        titleElement.innerHTML = titles[currentIndex];
  
        titleElement.style.opacity = 1;
  
        currentIndex = (currentIndex + 1) % titles.length;
  
        setTimeout(function () {
          changeTitle(elementIds);
        }, 6000);
      }, 700);
    });
  }
  
  changeTitle(["title", "lastMessage"]);
  