//fungsi jenis 1
function namaFungsi1(){
    console.log("Hello World!1");
 }

 //fungsi jenis 2
 var namaFungsi2 = function(){
    console.log("Hello World!2");
 }

 //fungsi jenis 3
 var namaFungsi3 = () => {
    console.log("Hello World!3");
 }

 // atau seperti ini (jika isi fungsi hanya satu baris):
 var namaFungsi4 = () => console.log("Hello World!4");

 var namaFungsi = new Function('console.log("Hello World!");');

 //ini panggilannya
//namaFungsi()
//namaFungsi2()
//namaFungsi3()
///
function fungsibagi(a,b){
    let c = a/b
    console.log("Hasil bagi a dan b adalah " + c)
}

//fungsibagi(2,4)
