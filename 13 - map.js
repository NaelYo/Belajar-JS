/*Map*/
//Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
const myMap = new Map();

//Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi
const isMap = new Map([
    ['1', 'a String key'],
    [1, 'a Number key'],
    [true, true]
]);

console.log(isMap); //Output: { '1' => 'a String key', 1 => 'a Number key', true => true }
//Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan elemen keduanya merupakan value

//Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
const ibuKota = new Map([
    ['Jakarta', 'Indonesia'],
    ['London', 'England'],
    ['Tokyo', 'Japan']
]);

console.log(ibuKota.size); //Output: 3, artinya => map yang kita miliki yaitu 3
console.log(ibuKota.get('London')); //Output: 'England', artinya => kita mengambil value dari key London

ibuKota.set('Bangkok', 'Thailand'); //artinya => kita menambahkan elemen baru ke dalam map ibuKota dengan key 'Bangkok' dan value 'Thailand'
console.log(ibuKota.size); //Output: 4, karena kita sudah menambahkan elemen baru ke dalam map kita
console.log(ibuKota.get('Bangkok')); //Output: 'Thailand', artinya => kita mengambil value dari key 'Bangkok'

/* kita bisa mengecek atau menghapus Map dengan menggunakan (has), (delete), dan (clear) */

//Has
console.log(ibuKota.has('Bangkok')); //Output: true, artinya => kita melakukan pengecekan apakah key 'Bangkok' ada di dalam Map atau tidak, jika ya maka outputnya adalah 'true', jika tidak maka outputya 'false'

//Delete
console.log(ibuKota.delete('Jakarta')); //Output: true, artinya => JavaScript akan melakukan pengecekan dulu, jika key ada maka perintah (delete) akan dijalankan dan menghasilkan nilai 'true'
console.log(ibuKota.get('Jakarta')) //Output: undifined, artinya => key 'Jakarta' berhasil di hapus

//Clear
console.log(ibuKota.clear()); //Output: undifined, artinya => kita membersihkan semua elemen dari Map ibuKota, sehingga ketika di console.log(ibuKota);
console.log(ibuKota) //Output: Map(0) {}, artinya => Map ibuKota sudah kosong.



//Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini:
const wrongMap = new Map();

wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]); //Output: 'My Value'

//Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti (has) atau (delete)
console.log(wrongMap.has("My Key")); //Output: false
console.log(wrongMap.delete('My Key')); //Output: false
//liat, key 'My Key' tidak tersimpan di Map query, sehingga saat dicek key ada atau tidak (has), maka hasilnya akan false, dan saat ingin di hapus (delete) hasilnya juga false, karena tidak tersimpan di Map query