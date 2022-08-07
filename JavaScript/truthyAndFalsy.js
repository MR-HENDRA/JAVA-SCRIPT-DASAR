/* Selain nilai boolean false, 
tipe data atau nilai yang dianggap falsy, antara lain:

- Number 0
- BigInt 0n
- String kosong seperti “” atau ‘’
- null
- undefined
- NaN, atau Not a Number


Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi 
ke dalam if statement akan bernilai true. Berikut ini contohnya dalam kode: */

let nama = '';

if (nama) {
  console.log('Halo, ' + nama);
} else {
  console.log('Nama masih kosong');
}

/* Output:
Nama masih kosong
*/
