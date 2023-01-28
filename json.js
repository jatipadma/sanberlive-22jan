const response = {
    testing : 1234,
    aset : {
        rumah : "andara",
        reksadana : "bibit",
        kendaraan : ["avanza","mio"]
    }
}


function printKendaraan(data){
    for(let i=0; i<data.aset.kendaraan.length;i++ ){
        let asetKendaraan = data.aset.kendaraan[i]
        console.log("Kendaraan ke " + i + "adalah : " + asetKendaraan)
    }
}

printKendaraan(response)
console.log(response.aset.reksadana)