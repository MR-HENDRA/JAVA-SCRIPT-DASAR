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
