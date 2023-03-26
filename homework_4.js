let array = [];
let arrGenap = []
let maxGenap 
let minGenap 
let totalGenap = 0
let rataGenap = 0

let arrGanjil = []
let maxGanjil 
let minGanjil 
let totalGanjil = 0
let rataGanjil = 0


//Membuat array random 

for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random()*50));
}
console.log(array)


//Membuat Array Genap dan Ganjil

for (let i = 0; i < array.length; i++) {
    if(i % 2 == 0){
        arrGenap.push(array[i])
    } else {
        arrGanjil.push(array[i])
    }   
}

console.log(`===Array GENAP=== \n ${arrGenap}`)
console.log(`===Array GANJIL=== \n ${arrGanjil}`)



for (let i = 0; i < 50; i++) {
    minGanjil = arrGanjil[0];
    maxGanjil = arrGanjil[0];
    minGenap = arrGenap[0];
    maxGenap = arrGenap[0];


    if(minGanjil > arrGanjil[i]){
        minGanjil = arrGanjil[i]
    }
    if(minGenap > arrGenap[i]){
        minGenap = arrGenap[i]
    }
    if(maxGanjil < arrGanjil[i]){
        maxGanjil = arrGanjil[i]
    }
    if(maxGenap < arrGenap[i]){
        maxGenap = arrGenap[i]
    }

    totalGanjil += arrGanjil[i]
    totalGenap += arrGenap[i]

}

rataGanjil = totalGanjil / arrGanjil.length
rataGenap = totalGenap / arrGenap.length


console.log(`===Rincian Data Ganjil===`)
console.log(`Minimal Ganjil Adalah :${minGanjil}`)
console.log(`Maksimal Ganjil Adalah :${maxGanjil}`)
console.log(`Total Ganjil Adalah : ${totalGanjil}`)
console.log(`Rata-rata Ganjil Adalah :${rataGanjil}`)


console.log(`===Rincian Data Genap===`)
console.log(`Minimal Genap Adalah :${minGenap}`)
console.log(`Maksimal Genap Adalah :${maxGenap}`)
console.log(`Total Genap Adalah : ${totalGenap}`)
console.log(`Rata-rata Genap Adalah :${rataGenap}`)

//Perbandingan Maksimal Ganjil dan Genap
if(maxGanjil > maxGenap){
    console.log(`Maksimal Ganjil lebih besar dari maksimal Genap`)
}else if(maxGanjil < maxGenap) {
    console.log(`Maksimal Genap lebih besar dari maksimal Ganjil`)
} else {
    console.log(`Maksimal pada kedua Array Sama`)
}

//Perbandingan Minimal Ganjil dan Genap
if(minGanjil > minGenap){
    console.log(`Minimal Ganjil lebih besar dari minimal Genap`)
}else if(minGanjil < minGenap) {
    console.log(`Minimal Genap lebih besar dari minimal Ganjil`)
} else {
    console.log(`Minimal pada kedua Array Sama`)
}

//Perbandingan Rata-Rata Genap dan ganjil
if(rataGanjil > rataGenap){
    console.log(`Rata Ganjil lebih besar dari rata Genap`)
}else if(rataGanjil < rataGenap) {
    console.log(`Rata Genap lebih besar dari rata Ganjil`)
} else {
    console.log(`Rata pada kedua Array Sama`)
}


//Perbandingan Rata-rata Ganjil dan Genap
if(totalGanjil > totalGenap){
    console.log(`Total Ganjil lebih besar dari total Genap`)
}else if(totalGanjil < totalGenap) {
    console.log(`Total Genap lebih besar dari total Ganjil`)
} else {
    console.log(`Total pada kedua Array Sama`)
}