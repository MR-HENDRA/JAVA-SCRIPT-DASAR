// operator:

/* 

== : Membandingkan kedua nilai apakah sama (Tidak Identik)
!= : Membandingkan kedua nilai apakah tidak sama (Tidak Identik)
=== : Membandingkan kedua nilai apakah identik
!== : Membandingkan kedua nilai apakah tidak identik
> : Membandingkan nilai apakah nilai pertama lebih besar dari nilai kedua
< : Membandingkan nilai apakah nilai pertama lebih kecil dari nilai kedua
>= : Membandingkan nilai apakah nilai pertama lebih besar atau sama dengan dari nilai kedua
<= : Membandingkan nilai apakah nilai pertama lebih kecil atau sama dengan dari nilai kedua

*/

let a = 10;
let b = 15;

console.log(a < b);
console.log(a > b);

/* output:
true
false
*/

// PERBEDAAN ANTARA "SAMA" DAN "IDENTIK"

// contoh:

const aString = '10';
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString === aNumber);

/* output:
true
false
*/
