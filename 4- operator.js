/*Assignment operator = Pada dasarnya operator ini adalah tanda sama dengan (=)*/
let x = 10;
let y = 5;
console.log(x); //output: 10
console.log(y); //output: 5

//Shortcut Assignment Operator
x += y //artinya => x = x + y
x -= y //artinya => x = x - y
x *= y //artinya => x = x * y
x /= y //artinya => x = x / y
x %= y //artinya => x = x % y


/*Comparisson operator*/
/*
Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai (<, >, <=, >=, ==, !=, ===, !==)
*/
let a = 1;
let b = 5;
console.log(a < b); //artinya => let a (lebih kecil dari) let b, output: true
console.log(a > b); //artinya => let a (lebih besar dari) let b, output: false
console.log(a <= b); //artinya => let a (lebih kecil sama dengan) let b, output: true
console.log(a >= b); //artinya => let a (lebih besar sama dengan) let b, output: false

let c = 1;
let d = '1';
console.log(c == d); //artinya => let c (sama dengan/nilainya sama) let d, output: true
console.log(c != d); //artinya => let c (tidak sama dengan/kebalikan) let d, output: false
console.log(c === d); //artinya => let c (identik/sama dari segi nilai dan tipe data) let d, output: false
console.log(c !== d); //artinya => let c (tidak identik/kebalikan) let d, output: true
//tips : == dan === TIDAK SAMA! (==:'sama'), (===:'identik');

/*Logical operator*/
/*
Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators (&&, ||, !)
*/
let i = 10;
let j = 12;

/*Dan operator (&&)*/
console.log(i < j && j > i); //artinya => apakah i < j dan j > i, output: true (kerena kedua kondisi bernilai true)
console.log(i < j && j < i); //artinya => apakah i < j dan j < i, output: false (kerena salah satu dari kondisi bernilai false)

/*Atau operator (||)*/
console.log(i < j || j > i) //artinya => apakah i < j atau j > i ada yang memiliki nilai true?, output: true (karena kedua kondisi tersebut bernilai true)
console.log(i < j || j < i) //artinya => apakah i < j atau j < i ada yang memiliki nilai true?, output: true (berbeda dengan 'Dan operaor' Atau operator bisa bernilai true apabila 1 kondisi bernilai true)
console.log(i > j || j < i) //artinya => apakah i > j atau j < i ada yang memiliki nilai true?, output: false (karena 2 kondisi tersebut false)

/*Kebalikan operator(!)*/
console.log(!(i < j)); //artinya => balikan kondisi i < j maka, output: false
console.log(!(i > j)); //artinya => balikan kondisi i > j maka, output: true


