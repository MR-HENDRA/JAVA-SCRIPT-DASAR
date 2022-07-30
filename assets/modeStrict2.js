x = 15; // ini tidak akan dianggap error karena tidak kena mode strict
showAngka(); // ini tidak akan dianggap error karena tidak kena mode strict

function showAngka() {
  'use strict';
  x = 15; // ini akan dianggap error karena variabel belum dideklarasikan
  alert(x);
}
