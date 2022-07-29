// 1. UNDIFINED

let x;
console.log(typeof(x));

/* output: undefined */

// Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks

// 2. NUMBER

let y = 10;
console.log(typeof(y))

/* output: number */

let z = 17.25;
console.log(typeof(z))

/* output: number */

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// 3. STRING

let greet = "Hello";
console.log(typeof(greet))

/* output: string */

let greet2 = "Hello";
let moreGreet = greet2 + greet2;
console.log(moreGreet);

/* output: HelloHello */

// 4. BOOLEAN

let xTrue = true;
let yFalse = false;

console.log(typeof(xTrue))
console.log(typeof(yFalse))

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

// 5.NULL

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

let variabel; // x merupakan undefined
variabel = 1 // sekarang x merupakan number
variabel = true // sekarang x merupakan boolean
variabel = "Harry" // sekarang x merupakan string

console.log(variabel);