/*Spread =*/
//fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...)

const favoritKu = ['Ayam', 'Soto', 'Telur', 'Nasi', 'Tahu'];
const yangLain = ['Mi', 'Tempe', 'Sayur'];
console.log(favoritKu); //Output: [ 'Ayam ', 'Soto Ayam', 'Telur', 'Nasi ', 'Tahu ' ]
console.log(favoritKu.length); //Output: 5
//Pada kode diata hasil yang dicetak adalah sebuah array ([]), karena memang kita mencetak nilai favorites itu sendiri. Nah, dengan menggunakan spread operator kita dapat menyebarkan nilai-nilai dalam array tersebut.
console.log(...favoritKu); //Output: Ayam Soto Telur Nasi Tahu 

//Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru
//Sebelum di spread
const semuaFavorit = [favoritKu, yangLain];
console.log(semuaFavorit);
/*Output:
    [
        [ 'Ayam', 'Soto', 'Telur', 'Nasi', 'Tahu' ],
        [ 'Mi', 'Tempe', 'Sayur' ]
    ]
*/

//Sesudah di spread
const favoritSemua = [...favoritKu, ...yangLain];
console.log(favoritSemua); //Output: [ 'Ayam', 'Soto', 'Telur', 'Nasi', 'Tahu', 'Mi', 'Tempe', 'Sayur' ]
//dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung.

/*
Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas
*/
const userData1 = {firstName : 'Devin', age : 18};
const userData2 = {lastName : 'David', gender : 'Laki-laki'};

const allUser = {...userData1, ...userData2};
console.log(allUser); //Output: { firstName: 'Devin', age: 18, lastName: 'David', gender: 'Laki-laki' }

