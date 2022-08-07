const isRaining = true;
console.log('Persiapan sebelum berangkat kegiatan.');
if (isRaining) {
  console.log('Hari ini hujan. Bawa payung.'); // karena isRaining adalah true, maka akan mencetak kalimat ini
}
console.log('Berangkat kegiatan.');

/* OUTPUT:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
*/

const isRaining2 = false;
console.log('Persiapan sebelum berangkat kegiatan.');
if (isRaining2) {
  console.log('Hari ini hujan. Bawa payung.'); // karena isRaining adalah false, maka tidak akan mencetak kalimat ini
}
console.log('Berangkat kegiatan.');

/* OUTPUT:
Persiapan sebelum berangkat kegiatan.
Berangkat kegiatan.
*/

let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log('Nilai Kurang dari 70 !');
}

/* OUTPUT:
Nilai Kurang dari 70 !
*/

// TERNARY OPERATOR ATAU CONDITIONAL EXPRESSIONS 
// Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris.

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log('Anda mendapatkan diskon sebesar ' + discount * 100 + '%');

/* Output:
Anda mendapatkan diskon sebesar 0%
*/

const isMember2 = true;
const discount2 = isMember2 ? 0.1 : 0;
console.log('Anda mendapatkan diskon sebesar ' + discount2 * 100 + '%');

/* Output:
Anda mendapatkan diskon sebesar 10%
*/

