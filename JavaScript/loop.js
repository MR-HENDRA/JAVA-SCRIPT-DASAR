// 1. FOR LOOP

/*
for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
}
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
OUTPUT:
0
1
2
3
4 
*/

const myArray = ['Hendra', 'Usman', 'Hendri', 'Ali', 'Marwati', 'Tahang', 'Sitti'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

/*
OUTPUT:
Hendra
Usman
Hendri
Ali
Marwati
Tahang
Sitti
*/

// 2. FOR OF LOOP

/*
for(arrayItem of myArray){
    // do something
}
*/

const myArray2 = ['Hendra', 'Usman', 'Hendri', 'Ali', 'Marwati', 'Tahang', 'Sitti'];

for (const arrayItem of myArray2) {
  console.log(arrayItem);
}

/*
OUTPUT:
Hendra
Usman
Hendri
Ali
Marwati
Tahang
Sitti
*/
