(function(window){
  let SpeakGoodBye = {};
  let speakWord = "Good Bye";

  SpeakGoodBye.speak = function (name) {
    console.log(speakWord  + " " + name);
  };
  SpeakGoodBye.speakRainy = function (name, vowelsCount) {
    console.log("Дощить, " + name + ", візьми парасольку! (Голосних: " + vowelsCount + ")");
  };
  window.SpeakGoodBye = SpeakGoodBye;
})(window);
