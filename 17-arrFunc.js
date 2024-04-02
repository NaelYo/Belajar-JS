/*Arrow Function*/
//arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow (=>). Tentunya penulisan arrow function ini akan lebih singkat.
const sayHello = (name) => {
    console.log(`Halo nama saya ${name}`);
}

//Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung dan jika kita tidak memiliki parameter kita tetap menuliskan tanda kurung (), seperti berikut:
const greet = greeting => {
    console.log(`${greeting} my name is ${name}`);
}

const introduce = () => {
    console.log('Nama Saya John');
}

//Arrow function bisa membuat sebuah function satu baris loh, dengan menghapus kurung kurawal. Seperti berikut:
const favorite = makanan => console.log(`Saya suka ${makanan}`);

//dan jika functionnya megembalikan nilai, kita tidak usah memberi (return) lagi.
const multiply = (a, b) => a * b 
console.log(multiply(1, 2)); //Output: 2
