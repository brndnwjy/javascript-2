let pijar = [
  "Siti",
  "Furqon",
  "Ichsan",
  "Brandon",
  "Taufik",
  "Iqbal",
  "Reza",
  "Rhefa",
  "Budi",
];

// pop()
// menghapus data dalam sebuah array di indeks terakhir
pijar.pop();
console.log(pijar);

// shift()
// menghapus data dalam sebuah array di indeks pertama
pijar.shift();
console.log(pijar);

// push()
// menambahkan data baru ke data dalam sebuah array di indeks terakhir
pijar.push("Vicko");
console.log(pijar);

// unshift()
// menambahkan data baru ke data dalam sebuah array di indeks terakhir
pijar.unshift(["Ainur", ["Alfath"]]);
console.log(pijar);

// flat()
// mengurangi dimensi pada array multidimensi
// dimensi yang dikurangi sesuai parameter yang dimasukkan
// Infinity berarti membuat array menjadi satu dimensi berapa banyak pun dimensi awalnya
pijar = pijar.flat(Infinity);
console.log(pijar);

// sort()
// mengurutkan data pada sebuah array
pijar.sort();
console.log(pijar);

// splice()
// bisa digunakan untuk memotong sebuah data sebuah array
// menghapus dan menambahkan data di indeks spesifik
pijar.splice(5);
console.log(pijar);

const pi = 3.14;
const planck = 6.62607015;

// Math.floor(), Math.ceil(), Math.round()
// digunakan untuk membulatkan sebuah bilangan desimal menjadi bilangan bulat
// floor untuk pembulatan ke bawah, ceil untuk pembulatan ke atas
// dan round untuk pembulatan ke bilangan terdekat
console.log(Math.round(pi));
console.log(Math.round(planck));

// Math.random()
// mencetak angka random yang bernilai antara 0 - 1
console.log(Math.random() * 10);

// Math.pow()
// memangkatkan sebuah bilangan dengan parameter (a, b)
// dimana a sebagai basis dan b sebagai eksponensial
console.log(Math.pow(pi, 2));
