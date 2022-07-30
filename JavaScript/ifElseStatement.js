let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log('Nilai Kurang dari 70 !');
}

/*
output:
Nilai Kurang dari 70 !
*/

let language = 'English';
let greeting = 'Selamat Pagi!';

if (language === 'English') {
  greeting = 'Good Morning!';
}

console.log(greeting);

/*
output:
Good Morning!
*/

let language2 = 'French';
let greeting2 = 'Selamat Pagi!'; // DEFAULT

if (language2 === 'English') {
  greeting2 = 'Good Morning!';
} else if (language2 === 'French') {
  greeting2 = 'Bonjour!';
} else if (language2 === 'Japanese') {
  greeting2 = 'Ohayogozaimasu!';
}

console.log(greeting2);
