/*Function Parameter*/
//fungsi merupakan suatu blok kode yang dapat menerima input dan menghasilkan output tertentu. Input ke dalam sebuah fungsi dikirimkan melalui parameter. Di dalam fungsi kita akan banyak bertemu istilah parameter & argument.
function multiply(a, b) { // (a, b) => sebagai parameter
    return a * b
}

console.log(multiply(2, 2)); //Output: 4, (2, 2) => sebagai argument

//Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya
const user = {
    firstName : 'John',
    lastName : 'Doe',
    age : 18
}; //Object

function introduce({firstName, lastName}) /*Destructuring Object*/ {
    return `Halo ${firstName} ${lastName}`; //Mengembalikan nilai dari object
}

console.log(introduce(user)); //Output: Halo John Doe


/*Default Parameter*/
//Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
function exponent(num, exp) {
    const sum = num ** exp
    return `${num}^${exp} = ${sum}`
}

console.log(exponent(2)) //Output: 2^undifined = NaN, argument dimasukkan hanya masuk ke parameter 'num' sehingga parameter 'exp' bernilai undifined dan variabel sum nilai nya NaN

//Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter.
function division(num, div = 2 /*Menambahkan nilai default*/) {
    const result = num / div
    return `${num}:${div} = ${result}`
}

console.log(division(2)) //Output: 2:2 = 1


//Rest Parameter
//Rest parameter juga dituliskan menggunakan three consecutive dots (...) seperti spread operator. Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array
//Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
function sum(...numbers) /*Menyatukan semua argumen*/ {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); //Output: 15
 
