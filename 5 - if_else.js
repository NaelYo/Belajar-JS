/*IF/ELSE STATEMENT*/

/*IF statement*/
/*
Ketika mengembangkan sebuah program, kita akan bertemu dengan alur bercabang tergantung pada kondisi yang terjadi. Untuk mengakomodasi dan mengecek sebuah kondisi dalam JavaScript, kita menggunakan kata kunci if.
*/
const hariIniHujan = true; //apabila bernilai false maka, blok kode di dalam IF statement akan dilewatkan

console.log('Persiapan sebelum berangkat!'); //output: 'Persiapan sebelum berangkat'
if (hariIniHujan) {
    console.log('Hari ini hujan, Bawa payung!'); //output: 'Hari ini hujan, Bawa payung!' (apabila const hariIniHujan bernilai false maka blok code ini akan di lewatkan)
} 
console.log('Berangkat kegiatan'); //output: 'Berangkat kegiatan'


/*ELSE statement = untuk pengecekan kondisi apabila kondisi di dalam IF statement bernilai false*/
let x = 40;

console.log('Cek apakah nomor anda lebih dari 50?'); //output: 'Cek apakah nomor anda lebih dari 50?'
if (x < 50) /*true*/ {
    console.log('Nomor kamu kurang dari 50!'); //apabila nomor user kurang dari 50 maka blok ini akan dijalankan dan menghasilkan, output: 'Nomor kamu kurang dari 50!'
} else {
   console.log('Nomor kamu lebih dari 50!'); //apabila nomor user lebih dari 50 maka blok ini akan dijalankan dan menghasilkan, output: 'Nomor kamu lebih dari 50!'
};

/*ELSE IF statement = untuk mengecek beberapa kondisi secara sekaligus dengan menggabungkan if dan else*/
let language = 'French';
let greeting = 'Selamat Pagi';

if (language === 'French') /*artinya => jika let language identik dengan string 'French' maka ubah nilai let greeting menjadi string 'Bpnjour*/ {
    greeting = 'Bonjour'
} else if (language === 'English') /*artinya => jika juga let language identik dengan string 'English' maka ubah nilai let greeting menjadi string 'Hello'*/ {
    greeting = 'Hello'
} else if (language === 'Japan') /*artinya => jika juga let language identik dengan string 'Japan' maka ubah nilai let greeting menjadi string 'Ohayo Gozaimas'*/ {
    greeting = 'Ohayo Gozaimas'
}

console.log(greeting); //output: 'Bonjour


/*Truthy & Falsy = Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy*/
/*
Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number
*/
let name = ''; //string kosong, kondisi = false (maka yang akan dijalankan adalah blok kode di dalam ELSE statement)
if (name) {
    console.log(`Halo kamu ${name}`);
} else {
    console.log('Nama masih kosong'); //output: 'Nama masih kosong
}




