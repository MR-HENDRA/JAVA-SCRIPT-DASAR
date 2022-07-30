// 1. NATIVE FUNCTION
// Contoh:  alert(), confirm(), Date(), parseInt() dll.

// 2. CUSTOM FUNCTION

function greeting() {
  console.log('Good Morning Hendra !');
}

greeting();

// output :
// Good Morning Hendra !

function greeting2(name, language) {
  if (language === 'English') {
    console.log('Good Morning ' + name + '!');
  } else if (language === 'French') {
    console.log('Bonjour ' + name + '!');
  } else {
    console.log('Selamat Pagi ' + name + '!');
  }
}

greeting2('Hendra Usman', 'French');

// output :
// Bonjour Hendra Usman!

function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 7);
console.log('Hasil dari 5x7 adalah ' + result);

// output :
// Hasil dari 5x7 adalah 35

function greeting3(name, language) {
  if (language === 'English') {
    return 'Good Morning ' + name + '!';
  } else if (language === 'French') {
    return 'Bonjour ' + name + '!';
  } else {
    return 'Selamat Pagi ' + name + '!';
  }
}

let greetingMessage = greeting3('Hendra', 'English');
console.log(greetingMessage);

// output :
// Good Hendra Usman!
