/*Set*/
//Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.

const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet); //Output: Set(3) { 1, 4, 6 }, angka yang sama akan dibuang sehingga tidak ada duplikasi

//Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet); //Output: Set(5) { 1, 4, 6, 5, 10 }
//.add(5) => menambahkan angka 5 kedalam Set
//.add(10) => menambahkan angka 10 kedalam Set
/*.add(6) => menambahkan angka 6 kedalam Set tapi, karena sebelumnya angka 6 sudah ada di dalam Set
maka input nya dicancel (dibuang) */

//kenapa output nya tidak berurutan? { 1, 4, 5, 6, 10 }, karena sifat Set yang hanya menyimpan data unik dan tidak memperhatikan urutannya, jadi jika ingin mengurutkan data, lebih baik jangan memakai struktur data Set
//Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.

//di dalam Set juga kita bisa menghapus data di dalam Set menggunakan (delete)
numberSet.delete(4); 
console.log(numberSet); //Output: Set(4) { 1, 6, 5, 10 }, data nomor 4 sudah dihapus sehingga tidak ada di dalam Set