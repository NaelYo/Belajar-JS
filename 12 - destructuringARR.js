/*Destructuring Array*/
//Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal {} sedangkan array menggunakan tanda kurung siku []. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya

const makanan = ['Salad', 'Nuggets', 'Chicken', 'Bakso'];

const [firstFood, secondFood, thirdFood, fourthFood] = makanan
console.log(firstFood); //Output: Salad
console.log(secondFood); //Output: Nuggets
console.log(thirdFood); //Output: Chicken
console.log(fourthFood); //Output: Bakso
/*
Di dalam array favorites terdapat 4 (empat) nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, dan fourthFood. Nilai dari array yang dimasukkan ke variabel lokal dipilih berdasarkan posisi di mana ia dideklarasikan pada array.
*/

//kita bebas memberikan nama variable lokal, dengan syarat sesuai urutan ketika di destructuring
//Contohnya, jika ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama, kedua, atau pun keempat. Kita bisa melakukannya dengan membiarkan index array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal). Lebih lanjut, tanda koma (,) tetap diperlukan untuk menunjukkan posisi index-nya

const car = ['Toyota', 'Mazda', 'Honda', 'Mustang'];

const [ , , car3, ] = car;
console.log(car3); //Output: Honda
console.log(); //Output: Undifined


//Destructuring Assignment
//Sama seperti object, array juga bisa melakukan destructuring assignmnet. Namun perbedaannya ialah array tidak perlu dibungkus oleh tanda kurung.

let car1 = 'Lamborghini';
let car2 = 'Ferarri';
console.log(car1, car2); //Output: ['Lamborghini', 'Ferarri']

[car1, car2] = car //destructuring assignment
console.log(car1, car2); //Output: ['Toyota', 'Maxda']

//Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel.

var a = 1;
var b = 2;
var tukar; //variable yang akan jadi jembatan/penengah, untuk melakukan pertukaran

//Sebelum ditukar
console.log('Nilai a = ' + a); //Output: Nilai a = 1
console.log('Nilai b = ' + b); //Output: Nilai b = 2

tukar = a; //artinya => var tukar isi nilainya dengan var a yaitu 1 maka, var temp = 1
a = b; //artinya => var a di isi nilainya dengan var b yaitu 2 maka, var a = 2
b = tukar; //artinya => var b isi nilainya dengan var tukar yaitu 1 maka, var b = 1

//Sesudah ditukar
console.log('Nilai a = ' + a); //Output: Nilai a = 2
console.log('Nilai b = ' + b); //Output: Nilai b = 1

//Variabel penengah dibutuhkan untuk menyimpan data sementara pada variabel yang akan ditukar. Hal ini menjadi kurang efektif karena kita harus membuat variabel baru yang sebenarnya hanya bersifat sementara.
//Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.

let x = 1;
let y = 2;

//Sebelum ditukar
console.log('Nilai x = ' + x); //Output: Nilxi x = 1
console.log('Nilai y = ' + y); //Output: Nilai y = 2

[x, y] = [y, x];

//Sebelum ditukar
console.log('Nilai x = ' + x); //Output: Nilxi x = 2
console.log('Nilai y = ' + y); //Output: Nilai y = 1


//Default Values
//Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined
const myLaptop = ['Asus', 'Hp'];
const [firstLaptop, secondLaptop, thirdLaptop] = myLaptop

console.log(firstLaptop); //Output: Asus
console.log(secondLaptop); //Output: Hp
console.log(thirdLaptop); //Output: undifined

//Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array
const myHp = ['Oppo', 'Huawei'];
const [firstHp, secondHp, thirdHp = 'Iphone'] = myHp

console.log(firstHp); //Output: Oppo
console.log(secondHp); //Output: Huawei
console.log(thirdHp); //Output: Iphone
