/* 3 JENIS KEYWORD VARIABEL DALAM JS: */
/* var, let dan const */

/* var ---> sudah tidak disarankan untuk digunakan karena 
kontroversial dan rawan menimbulkan bug */

/* const (constant) ---> Digunakan untuk variabel yang bernilai tetap
dan tidak bisa diubah setelah diinisialisasi nilainya.*/

let lastName;
lastName = 'Hendra';
console.log(lastName);

/* 
OUTPUT:
Hendra
*/

let lastName2 = 'Usman';
console.log(lastName2)

const z = 100;
console.log(z);
z = 200;
console.log(z); // Error karena const tidak boleh diinisialiasi kembali

/* 
OUTPUT:
100
TypeError: Assignment to constant variable.
*/