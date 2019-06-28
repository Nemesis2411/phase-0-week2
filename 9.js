// function shoutOut(){
//     return 'Halo Function!'
// }
// console.log(shoutOut()) // Menampilkan "Halo Function!" di console


// function calculateMultiply(param1, param2){
//     return param1 * param2
// }
// var num1 = 50;
// var num2 = 6;
// var num3 = num2 + 10
// var hasilPerkalian = calculateMultiply(num1,num3);
// console.log(hasilPerkalian)
// num3 = num3-5
// var hasilPerkalian = calculateMultiply(num1,num3);

// console.log(hasilPerkalian); // Menampilkan angka 30
// // console.log(calculateMultiply(30, 5))

function processSentence(nama, umur, alamat, hobi){
    return "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!"
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
name = "tomi";
age = 31;
address = "jakarta";
hobby = "bingung";
fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);