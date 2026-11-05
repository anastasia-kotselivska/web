(function (){
var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++ ) {
    let firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      SpeakGoodBye.speak(names[i]);
    } else {
      SpeakHello.speak(names[i]);
    }
}

var vowelsArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (var k = 0; k < names.length; k++) {
    var name = names[k];
    var vowelsCount = 0;

    // Рахуємо кількість голосних літер в імені
    for (var m = 0; m < name.length; m++) {
      if (vowelsArray.includes(name[m])) {
        vowelsCount++;
      }
    }

    // Якщо кількість голосних парна — сонячно, якщо непарна — дощить
    if (vowelsCount % 2 === 0) {
      helloSpeaker.speakSunny(name, vowelsCount);
    } else {
      byeSpeaker.speakRainy(name, vowelsCount);
    }
  }
})();
