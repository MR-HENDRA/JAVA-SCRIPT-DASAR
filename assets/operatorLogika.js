// operator:

/* 

&& : Operator dan (AND), logika akan menghasilkan True apabila semua  kondisi terpenuhi (bernilai true)
|| : Operator atau (OR), logika akan menghasilkan True apabila salah satu kondisi terpenuhi (bernilai true)
! : opeartor tidak (NOT), digunakan untuk membalikkan suatu kondisi

*/

let a = 10;
let b = 12;

/* AND OPERATOR */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR OPERATOR */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT OPERATOR */
console.log(!(a < 15)); // ! (True) ---> False
console.log(!(a < 15 && b > 10)); // !(True && True) ---> !(True) ---> False
