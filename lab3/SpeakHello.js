(function(window){

  let SpeakHello = {};
  let speakWord = "Hello";

  SpeakHello.speak = function (name) {
    console.log(speakWord  + " " + name);
  };
  SpeakHello.speakSunny = function (name, vowelsCount) {
    console.log("Сонячно, " + name + ", чудова погода! (Голосних: " + vowelsCount + ")");
  };
  window.SpeakHello = SpeakHello;
})(window);
