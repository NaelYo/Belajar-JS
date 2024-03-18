//cara cek tipe data menggunakan fungsi typeof

/*Undifined = Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai.*/
let undifined;
console.log(typeof(undifined)); //output: undifined


/*Number = Nilai dari tipe data number adalah angka.*/
let num = 1;
console.log(typeof(num)); //output: number
console.log(num); //output 1

let decimal = 3.14;
console.log(decimal); //output: 3.14


/*BigInt*/
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;
console.log(typeof(bigNumber)); //output: bigint
console.log(bigNumber); //output: 1234567890123456789012345678901234567890n
console.log(myInt); //output: 1.2345678901234568e+39

const bigIntButSmall = 7n;
console.log(bigIntButSmall); //output: 7n


/*String = Tipe data selanjutnya adalah string yang merupakan sebuah teks*/
let string = 'Ini String';
console.log(typeof(string)); //output: string
console.log(string); //output 'Ini String'

//String bisa menggunakan '' atau ""
const question = '"Apa yang kamu pikirkan tentang JavaScript?" aku tanya';
console.log(question) //output: '"Apa yang kamu pikirkan tentang JavaScript?" aku tanya'

const answer = '"I think it\'s awesome!" he answered confidently'; //escape string menggunakan backslash(\) saat kutip di string lebih
console.log(answer); //output: "I think it's awesome!" he answered confidently


/*Boolean = Tipe data ini menjadi kunci utama dalam penentuan logika*/
const x = true;
console.log(typeof(x)); //output: boolean
console.log(x); //output: true

const y = false;
console.log(typeof(y)); //output: boolean
console.log(y); //output: false


/*Null = Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel.*/
const nantiDiIsi = null;
console.log(typeof(nantiDiIsi)); //output: object (karena tidak ada nilai);
console.log(nantiDiIsi); //output: null


/*Symbol = Symbol digunakan untuk menunjukkan identifier yang unik*/
const id = Symbol('id');
console.log(typeof(id)); //output: symbol
console.log(id); //output: Symbol(id)

/* 
Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda
*/
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id === id2); //output: false

/*
Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data
*/
