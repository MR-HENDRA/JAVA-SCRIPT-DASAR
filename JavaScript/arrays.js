let myArray = ['Cokelat', 42.5, 22, true, 'Programming'];
console.log(myArray);

/* Output:
["Cokelat", 42.5, 22, true, "Programming"]
*/

let myArray2 = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log("Panjang nilai myArray adalah " + myArray2.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

// PUSH
// push() akan menambahkan data di akhir array.
let myArray3 = ['Cokelat', 42.5, 22, true, 'Programming'];
myArray3.push('Kopi');
console.log(myArray3);
/* output:
["Cokelat", 42.5, 22, true, "Programming", "Kopi"]
*/

// POP
// pop() akan menghapus data di akhir array.
let myArray4 = ['Cokelat', 42.5, 22, true, 'Programming'];
myArray4.pop();
console.log(myArray4);
/* output:
["Cokelat", 42.5, 22, true]
*/

// SHIFT & UNSHIFT
// shift() akan menghapus data di awal array.
// unshift() akan menambahkan data di awal array.
let myArray5 = ['Cokelat', 42.5, 22, true, 'Programming'];
myArray5.shift();
myArray5.unshift('Kopi');
console.log(myArray5);
/* output:
["Kopi", 42.5, 22, true, "Programming"]
*/

// DELETE
//
const myArray6 = ['Cokelat', 42.5, 22, true, 'Programming'];
delete myArray6[1];
console.log(myArray6);
/* output
['Cokelat', <1 empty item>, 22, true, 'Programming']
*/
// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index 
//  yang ditentukan lalu membiarkan posisi tersebut kosong

// SPLICE
// Untuk menghapus elemen, gunakan metode splice() seperti ini:
let myArray7 = ['Cokelat', 42.5, 22, true, 'Programming'];
myArray7.splice(1, 1);
console.log(myArray7);