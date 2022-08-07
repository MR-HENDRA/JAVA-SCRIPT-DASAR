let object = { key1: 'value1', key2: 'value2', key3: 'value3' };
console.log(object.key1);

// output: value1

let user = {
  firstName: 'Harry',
  lastName: 'Potter',
  age: 20,
  isMuggle: false,
  stuff: ['Magic Wind', 'Flying Car', 'Owl'],
};

console.log('Hallo, nama saya ' + user.firstName + ' ' + user.lastName);
console.log('Umur saya ' + user.age + ' tahun');

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

let user2 = {
  name: {
    first: 'Harry',
    last: 'Potter',
  },
  age: 20,
  isMuggle: false,
  stuff: ['Magic Wind', 'Flying Car', 'Owl'],
};

console.log('Hallo, nama saya ' + user2.name.first + ' ' + user2.name.last);
console.log('Umur saya ' + user2.age + ' tahun');

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/

const user3 = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 19,
  isJedi: true,
  'home world': 'Tattooine',
};
console.log('Halo, nama saya ' + user3.firstName + ' ' + user3.lastName);
console.log('Umur saya ' + user3.age + ' tahun');
console.log('Saya berasal dari ' + user3['home world']);

/* Output:
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/



const spaceship = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};

spaceship.color = 'Glossy red';
spaceship['maxSpeed'] = 1300;
console.log(spaceship);

/* Output:
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
*/

/*Tunggu dulu. 
Object spaceship dideklarasikan sebagai const, 
tetapi kenapa kita bisa mengubah nilainya?

Yang perlu diperhatikan adalah mengubah nilai berbeda 
dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, 
kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa 
memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.*/

const spaceship = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};
 
spaceship = { name: 'New Millenium Falcon' }; // Error

/* Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, 
maka nilai di dalamnya akan tergantikan dengan nilai yang baru. 
Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, 
maka properti baru akan ditambahkan ke object.*/

const spaceship2 = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};

spaceship2.color = 'Glossy red';
spaceship2['maxSpeed'] = 1300;
spaceship2.class = 'Light freighter';

console.log(spaceship2);

/* Output:
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

// Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:

const spaceship3 = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};

spaceship3.color = 'Glossy red';
spaceship3['maxSpeed'] = 1300;

delete spaceship3.manufacturer;

console.log(spaceship3);

/* Output:
{ 
  name: 'Millenium Falcon', 
  maxSpeed: 1300, 
  color: 'Glossy red'
}
 */
