// MODE STRICT
/* 
---> ADALAH MODE YANG MEMAKSAKAN PENULISAN PROGRAM JAVASCRIPT YANG BAIK DAN AMAN
*/

//contoh penggunaan mode strict secara global (ditulis di awal script)

'use strict';
x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
showAngka(); // ini akan dianggap error karena function belum dideklarasikan

function showAngka() {
  var x = 9;
  alert(x);
}
