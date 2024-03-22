/*Array = Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel */
let myArray = ['JavaScript', 123, 3.14, true, 12n];
console.log(myArray); //Output: [ 'JavaScript', 123, 3.14, true, 12n ]

//Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index
console.log(myArray[0]); //Output: 'JavaScript'
console.log(myArray[1]); //Outpur: 123
console.log(myArray[2]); //Output: 3.14
console.log(myArray[3]); //Output: true
console.log(myArray[4]); //Output: 12n
//indeks di dalam array dimulai dari indeks [0], jadi apabila kita ingin melihat indeks pertama gunakan [0];
//jika array melebihi indeks, array tersebut akan menghasilkan (undifined)
console.log(myArray[5]); //Output: undifined
//untuk melihat berapa banyak array yang kita buat kita bisa menggunakan (length)
console.log('Saya memiliki ' + myArray.length + ' Array');

//untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array, Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop()
myArray.push('Programmer');
console.log(myArray); //Output: Array(6) [ 'JavaScript', 123, 3.14, true, 12n, 'Programmer' ], menambah data di akhir array

myArray.pop();
console.log(myArray); //Output: [ 'JavaScript', 123, 3.14, true, 12n ], mengeluarkan data yang ada di akhir array.

//Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah 'shift()' dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara 'unshift()' digunakan untuk menambahkan elemen di awal array
myArray.shift();
console.log(myArray); //Output: [ 123, 3.14, true, 12n ], mengeluarkan data pertama di dalam array.

myArray.unshift('Hello World');
console.log(myArray); //Output: [ 'Hello World', 123, 3.14, true, 12n ], menambahkan data di awal array.

//sedikit tips, mengeluarkan data dan menghapus data di dalam array berbeda, lalu bagaimana kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword (delete)

delete myArray[1] //masukan indeks keberapa yang ingin kita hapus!
console.log(myArray); //Output: [ 'Hello World', undefined, 3.14, true, 12n ]

//kita baru saja menghapus data di dalam array, bagaimana kita ingin menghapus elemennya juga?
//keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode splice() seperti ini.

myArray.splice(1, 1); //artinya => kita menghapus dari indeks[1], sebanyak 1 elemen yaitu (123/undifined);
console.log(myArray); //Output: [ 'Hello World', 3.14, true, 12n ];

//Selain untuk menghapus elemen pada array, splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut. Caranya dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic) sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama

const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month); //Output: [ 'before splice: ', [ 'January', 'March', 'April', 'May' ] ]

month.splice(1, 0, 'February'); //artinya => menambahkan elemen di indeks[1], tanpa menambah indeks (internal)
console.log('after splice: ', month); //Output: [ 'after splice: ', [ 'January', 'February', 'March', 'April', 'May' ] ]
