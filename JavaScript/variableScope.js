// global  variable, dapat diakses pada parent() dan child()

const a = 'a';

function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses dilar dari fungsi tersebut.
  const b = 'b';

  function child() {
    // local variable, hanya dapat diakses pada fungsi child()
    const c = 'c';
  }
}

//contoh:

function multiply(num) {
  total = num * num;
  return total;
}

let total = 9;
let number = multiply(30);

console.log(total);

// OUTPUT:
// 300

function multiply2(num) {
  let total2 = num * num;
  return total2;
}

let total2 = 5;
let number2 = multiply2(10);

console.log(total2);

// OUTPUT:
// 9

/*  PERLU DIPERHATIKAN BAHWA, KETIKA KITA LUPA MENULISKAN
    KEYWORD LET, CONST, ATAU VAR PADA SCRIPT KETIKA MEMBUAT
    SEBUAH VARIABEL, MAKA VARIABEL TERSEBUT AKAN MENJADI GLOBAL
*/
