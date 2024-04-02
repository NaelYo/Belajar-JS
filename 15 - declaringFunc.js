/*Declaring Function*/
//function merupakan bagian penting dalam bahasa pemrograman, function dalam pemrograman juga digunakan untuk menghasilkan output berdasarkan input tertentu.

//struktur function
function multiply(a, b) {
    return a * b
}

//function => untuk mendeklarasikan bahwa kita akan membuat sebuah function
//multiply => untuk nama dari function kita (bebas), lebih baik menamakan sebuah function sesuai tugasnya
//(a, b) => adalah sebuah parameter untuk menyimpan data yang digunakan pada function untuk diproses didalamnya
//return a * b => return berguna untuk mengembalikan nilai. a * b adalah operasi matematika yaitu perkalian yang diambil dari data parameter

//Cara melihat output dari function yang kita buat
console.log(multiply(2, 2)); //Output: 4
//atau kita bisa memasukkan kedalam variable
let result = multiply(2, 2)
console.log(result)

//(2, 2) => merupakan argumen. Argument merupakan nilai atau expression yang dimasukkan ke dalam function
//banyaknya argumen harus sama dengan parameter, apabila tidak maka:
console.log(multiply(2, 3, 4)) //Output: 6
//argumen ke-3 dianggap tidak ada/dilewatkan

//Untuk menambahkan parameter pada function, tambahkan variabel di dalam tanda kurung function. Namun, variabel tersebut tidak memerlukan keyword var, let, ataupun const. Kita juga bisa menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variabel parameternya
function greet (name, language) {
    if(language === 'French') {
        return `Bonjour ${name}`;
    } else if(language === 'Japan') {
        return `Ohayo Gozaimas ${name}`;
    } else if(language === 'English') {
        return `Hello ${name}`;
    } else {
        console.log(`Halo ${name}`);
    }
}
console.log(greet('Nael', 'Japan')); //Output: 'Ohayo Gozaimas Nael'


/*Expression Function*/
//Cara lain untuk membuat sebuah function pada JavaScript adalah expression function. Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
//Pada expression function umumnya kita tidak perlu menuliskan nama functionnya. Fungsi yang tidak bernama juga dikenal dengan anonymous function.
const greeting = function(name, language) {
    if(language === 'French') {
        return `Bonjour ${name}!`;
    } else if(language === 'Japan') {
        return `Ohayo Gozaimas ${name}!`;
    } else if(language === 'English') {
        return `Hello ${name}!`;
    } else {
        return `Halo ${name}!`;
    }
}

let results = greeting('John', 'French');
console.log(results); //Output: 'Bonjour John!'


