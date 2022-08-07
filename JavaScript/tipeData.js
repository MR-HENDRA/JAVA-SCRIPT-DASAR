// 1. UNDIFINED

let x;
console.log(typeof x);

/* OUTPUT: undefined */

/* Fungsi typeof() digunakan untuk memastikan tipe data pada variabel 
dengan mengembalikan tipe data tersebut dalam bentuk teks */

// 2. NUMBER
// Mencakup nilai -(2^53-1) hingga(2^53-1)

let y = 10;
console.log(typeof y);

/* OUTPUT: number */

let z = 17.25;
console.log(typeof z);

/* OUTPUT: number */

let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++); /* OUTPUT: 5 */
console.log(postfix); /* OUTPUT: 6 */

let prefix = 5;
console.log(++prefix); /* OUTPUT: 6 */

// 3. BIGINT
// Digunakan untuk seperti Kriptografi atau menentukan waktu hingga presisi microsecond

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(myInt);
/* 
OUTPUT: 
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

//BigInt tetap bisa digunakan untuk nilai yang lebih kecil
const bigIntButSmall = 7n;
console.log(bigIntButSmall);
/* OUTPUT: 7n */

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);
/* 
OUTPUT:
7n
3n
10n
2n (pada BigInt, hasilnya dibulatkan. pada tipe number hasilnya adalah 2.5)
1n
*/

// 4. STRING

let greet = 'Hello';
console.log(typeof greet);
/* OUTPUT: string */

const question = ' "What do you think of JavaScript?" I asked';
console.log(question);
/* OUTPUT: "What do you think of JavaScript?" I asked */

const answer = ' "I think it\'s awesome!" he answered confidiently ';
console.log(answer);
/* OUTPUT: "I think it's awesome!" he answered confidiently  */

let greet2 = 'Hello';
let moreGreet = greet2 + greet2;
console.log(moreGreet);
/* OUTPUT: HelloHello */

let greet3 = 'Hello';
let moreGreet3 = greet3 +" "+ greet3; // gunakan tanda kutip dan spasi
console.log(moreGreet3);
/* OUTPUT: Hello Hello */

// 5. BOOLEAN

let xTrue = true;
let yFalse = false;

console.log(typeof xTrue);
console.log(typeof yFalse);

/* output: 
boolean
boolean
*/

const angka1 = 10;
const angka2 = 12;

let isGreater = angka1 > angka2;
let isLess = angka1 < angka2;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

// 6.NULL

let someLaterData = null;
console.log(someLaterData);
/* output: null */

let variabel; // x merupakan undefined
variabel = 1; // sekarang x merupakan number
variabel = true; // sekarang x merupakan boolean
variabel = 'Harry'; // sekarang x merupakan string
console.log(variabel);
/* output: Harry */

// 7. SIMBOL
// Umumnya digunakan sebagai properti dari object

const id = Symbol('id')
console.log(id);
/* OUTPUT: Symbol(id)*/

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 == id2);
/* OUTPUT: false */