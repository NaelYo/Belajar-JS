/*Switch case statement = untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.*/
let language = 'French';
let greeting = null; //nilai akan diambil dari case di dalam Switch case statement maka sementara nilai diisi dengan tipe data null

switch(language) /*kondisi = true*/ {
    case 'English' /*jika kondisi case adalah string 'English' maka nilai let greeting akan diubah menjadi string 'Hello'*/ :
        greeting = 'Hello';
        break;
    case 'French' /*jika kondisi case adalah string 'French' maka nilai let greeting akan diubah menjadi string 'Bonjour'*/ :
        greeting = 'Bonjour';
        break;
    case 'Japan' /*jika kondisi case adalah string 'Japan' maka nilai let greeting akan diubah menjadi string 'Ohayo Gozaimas'*/ :
        greeting = 'Ohayo Gozaimas';
        break;
    default /*jika kondisi case adalah default maka nilai let greeting akan diubah menjadi string 'Halo'*/ :
        greeting = 'Halo';
}

console.log(greeting); //output: 'Bonjour