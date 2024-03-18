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
console.log(firstName, lastName, age); //Output: ['John', 'Wick', 30] 
