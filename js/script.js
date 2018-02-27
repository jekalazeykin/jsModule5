const keyboard = {
  layouts: {
    en: {
      topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
      middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
      bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    },
    ru: {
      topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
      middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
      bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
    },
    ua: {
      topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
      middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
      bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
    }
  },
  langs: ['en', 'ru', 'ua'],
  currentLang: ''
};

while (true) {
  var language = prompt('Выберите язык: en-0, ru-1, ua-2');
  if ((language >= 0 && language <= 2) || language == null && (language ^ 0)) break;

  alert('Выбран не доступный язык');
}
language = Number(language);
if (language == 0) {
  keyboard.currentLang = 'en';
  var alphabet = keyboard.layouts.en;
} else if (language == 1) {
  keyboard.currentLang = 'ru';
  var alphabet = keyboard.layouts.ru;
} else if (language == 2) {
  keyboard.currentLang = 'ua';
  var alphabet = keyboard.layouts.ua;
}

function getRandCharInAlph(obj) {
  var arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  var indexHigh = Math.floor(Math.random() * arr.length);
  var indexLow = Math.floor(Math.random() * arr[indexHigh].length);
  console.log(arr[indexHigh][indexLow]);
}
getRandCharInAlph(alphabet);
