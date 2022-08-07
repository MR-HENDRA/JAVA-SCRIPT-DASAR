const firstName = prompt('Masukkan Nama Depan: ');
const lastName = prompt('Masukkan Nama Belakang: ');
const language = prompt('Masukkan Bahasa Anda: ');

const user = {
  name: {
    first: firstName,
    last: lastName,
  },
  language: language,
};

if (user.language === 'English') {
  alert('Nice to meet you ' + user.name.first + ' ' + user.name.last + '!');
} else if (user.language === 'French') {
  alert('Ravi de vous recontrer ' + user.name.first + ' ' + user.name.last + '!');
} else if (user.language === 'Japanese') {
  alert('Hajimemashite, ' + user.name.first + ' ' + user.name.last + '!');
} else {
  alert('Senang Bertemu dengan Anda!');
}
