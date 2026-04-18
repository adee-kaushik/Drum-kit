
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "1":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "3":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "4":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "5":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "6":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "7":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
