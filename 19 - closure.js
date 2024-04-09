/*Closure*/
//Setelah mempelajari tentang scope pada materi sebelumnya, kali ini kita akan membahas seputar closure.
//Sebelumnya kita telah tahu bahwa fungsi dapat didefinisikan dalam lingkup global atau di dalam fungsi lain. Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure.
// Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
function init() {
    const name = 'John Doe';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function, //Output: Halo, John Doe
    }
  
    greet();
}

init();

//Fungsi init() memiliki variabel lokal name dan fungsi greet(). Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name. Itulah yang dimaksud dengan lexical scope.
function init() {
    const name = 'John Doe';
  
    function greet() {
      console.log(`Halo, ${name}`); //Output: Halo, John Doe
    }
  
    return greet;
}

const myFunction = init();
myFunction();

//Kode di atas akan menghasilkan output yang sama. Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variabel name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di atas fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.

//JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java. Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun. Kenapa kita membutuhkan private method
let counter = 0;

const add = () => {
  return ++ counter;
}

console.log(add()); //Output: 1
console.log(add()); //Output: 2
counter = 23; //Output: 23
console.log(add()); //Output: 24
//Nilai counter akan bertambah ketika kita memanggil fungsi add(). Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator. Pada contoh program yang lebih kompleks, sebaiknya hal ini dihindari karena perubahan langsung pada nilai counter bisa saja memunculkan bug.

//Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure:
const adds = () => {
    let counter = 0;
      return () => {
        return ++ counter;
    };
  }
  
  const addCounter = adds();
  
  console.log(addCounter()); //Output: 1
  console.log(addCounter()); //Output: 2
  console.log(addCounter()); //Output: 3
  