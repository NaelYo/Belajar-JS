/*Object-Oriented Programming*/
//Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut.
//Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.
    // 1. Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
    // 2. Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.

const car = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    // methods
    drive: () => {
        console.log('driving'); //Output: 'driving
    },
    reverse: () => {
        console.log('reversing'); //Output: 'reversing'
    },
    turn: () => {
        console.log('turning'); //Output: 'turning'
    }
}

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

//Kode di atas merupakan contoh objek mobil atau car di JavaScript. Seperti yang Anda lihat, objek car memiliki properti brand, color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn. Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut.

//Di JavaScript untuk membuat sebuah objek terlihat mudah, bukan? Namun, masalah yang dipecahkan oleh paradigma OOP tidak hanya sebatas membuat objek sederhana saja
//Bagaimana jika Anda ingin membuat objek dua mobil baru dengan nilai yang berbeda? Haruskah Anda mendefinisikan properti dan method yang sama secara berulang???

const cars = {
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

const myCar = {
    brand: 'Tesla',
    color: 'black',
    maxSpeed: 250,
    chassisNumber: 't-1',
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

const yourCar = {
    brand: 'BMW',
    color: 'white',
    maxSpeed: 300,
    chassisNumber: 'b-1',
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

//Bagaimana jika ada banyak mobil yang harus Anda buat? Contoh, Anda membangun aplikasi yang memiliki entitas pelanggan. Jika Anda menggunakan cara di atas, mampukah Anda membuat objek pelanggan jika aplikasi sudah digunakan oleh 100 pelanggan?
//Dalam memecahkan masalah ini, OOP menawarkan sebuah solusi yakni dengan membuat object blueprint. Melalui object blueprint, kita bisa membuat cetakan untuk membuat objek yang sudah terdefinisikan macam-macam properti dan method-nya. Sehingga kita cukup menggunakan cetakan tersebut untuk membuat objek yang serupa, tetapi kita bisa menentukan nilai-nilai properti yang berbeda.