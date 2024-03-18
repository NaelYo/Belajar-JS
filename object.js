/*Object = Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.*/
//Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}
const a = {};

//Object berisi pasangan key dan value yang juga dikenal dengan property
const x = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
}
//Key harus berupa string dan dituliskan sebelum titik dua (:), bagaimana jika key terdapat spasi?
const dataUser = {
    nama : 'John',
    umur : 25,
    'jenis kelamin' : 'Laki-laki',
    domisili : 'Indonesia'
}

console.log(dataUser); 
/*output: 
    {
        nama: 'John',
        umur: 25,
        'jenis kelamin': 'Laki-laki',
        domisili: 'Indonesia'
    } 
*/

//untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya.
console.log(`Nama user adalah ${dataUser.nama}, umur ${dataUser.umur}`);
console.log(`Jenis kelamin ${dataUser["jenis kelamin"]}, berdomisili di ${dataUser.domisili}`);
//output: 'Nama user adalah John, umur 25'
//        'Jenis Kelamin Laki-laki, berdomisili di Indonesia'  

//Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket seperti di bawah.
dataUser['home world'];

//Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya, selanjutnya kita akan memodifikasi sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).

const ferrari = {
    model : 'SF90',
    maxSpeed : 340 + 'km/h',
    color : 'black',
    machine : 'V8 twin-turbocharged'
}   
console.log(ferrari);
/*Output:
    {
    model: 'SF90',
    maxSpeed: '340km/h',
    color: 'black',
    machine: 'V8 twin-turbocharged'
    }
*/

ferrari.color = 'red';
ferrari['model'] = 458;
console.log(ferrari);
/*Output:
    {
    model: 458,
    maxSpeed: '340km/h',
    color: 'red',
    machine: 'V8 twin-turbocharged'
    }
*/

/*
Object ferrari dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?

Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object
*/

//Kita juga dapat menghapus property pada object menggunakan keyword (delete).
delete ferrari.machine; //menghapus key machine dari object ferrari
console.log(ferrari); //Output: { model: 458, maxSpeed: '340km/h', color: 'red' }
