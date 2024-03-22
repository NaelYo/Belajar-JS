/*Destructuring Object = Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment*/
//contoh :
const dataUser = {
    firstName : 'John',
    lastName : 'Wick',
    age : 30
}

const {firstName, lastName, age} = dataUser //perhatikan penamaan variabelnya. Pastikan penamaannya sama seperti properti object-nya
/**
Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai dataUser.firstName, lastName akan berisikan nilai dataUser.lastName, begitu juga dengan variabel age akan berisikan nilai dataUser.age.
 */
console.log(firstName, lastName, age); //Output: John Wick 30 


//Destructing Assignment
//kita telah melakukan destructuring object pada deklarasi variabel. Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.
const myData = {
    name : 'Devin',
    gender : 'Man',
    isVegan : false
}

let name = 'Dimas';
let isVegan = true;
console.log(name); //Output: Dimas
console.log(isVegan); //Output: true

// // menginisialisasi nilai baru melalui destructuring object
({name, isVegan} = myData);
console.log(name); //Output: Devin
console.log(isVegan) //Output: false

//Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.


//Default Value
//Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi 'undefined'
const car = {
    brand : 'Tesla',
    from : 'California',
    model : 3
}

const {brand, from, model, sport}  = car; //properti 'sport' tidak ada di variable car maka nilainya 'undifined'
console.log(brand); //Output: Tesla
console.log(from); //Output: California
console.log(model); //Output: 3
console.log(sport);

//alternatifnya bisa menggunakan assignment pada properti yang tidak memiliki nilai
//contoh
    //const {brand, from, model, sport = true}  = car
    //console.log(sport); //Output: true


//Assigning to Different Local Variable Names
//dalam proses destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda.
//contoh

const favorit = {
    minuman : 'susu',
    buah : 'apel',
    makanan : 'nasi'
}

const {minuman : localMinuman, buah : localBuah, makanan : localMakanan} = favorit
console.log(localMinuman); //Output: susu
console.log(localBuah); //Output: apel
console.log(localMakanan); //Output: nasi
//untuk penamaan bebas diisi apa saja
