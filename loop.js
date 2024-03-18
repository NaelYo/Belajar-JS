/*For Loop*/
for (let i = 1 ; i <= 5; i++) {
    console.log(i);
}
/* let i = 1, artinya => membuat variable sebagai indeks iterasi, variable ini untuk membuat nilai awal dari perulangan*/
/* i <= 5, artinya => blok yang berfungsi untuk pengecekan kondisi, apabila bernilai true maka pengulangan akan dilakukan (1-5)*/
/* i++, artinya => increment/decrement, untuk melakukan penambahan pada variable iterasi*/

/*For Of Loop = for of tidak membutuhkan banyak statement untuk melakukan looping pada array*/
let myArray = ['Luke', 'Sam', 'Joe', 'Dev'];
for (const arrayItem of myArray) {
    console.log(arrayItem)
}

/*Dengan for..of nilai tiap array akaxn diinisialisasi pada variabel baru yang kita tentukan pada tiap proses looping-nya. Jumlah proses looping-nya pun akan menyesuaikan dengan ukuran dari array. Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray, akses tiap nilainya, dan simpan pada variabel arrayItem”. Pada proses looping kita gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArrayx*/