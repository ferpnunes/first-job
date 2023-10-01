console.log('print hello')
const mytext = 'web'
let mytexture = 'website'

mytexture = 'sveiki atvykę'

console.log(mytexture)

//            0, 1, 2, 3, 4
const laptop = [1, 2, 3, 7, 12]

console.log(laptop)

const bile = {
    price: 5,
    type: 'prekės',
    laptop: [6, 8]
}

console.log(bile)

const bileprice = bile.price

console.log('bileprice:', bileprice)

console.log(`mano ${bile.type} tokios`)

//loop - ciklas i - indeksas < 14 <=15 i+1 = ++ i-- =i-1
// for(let i=0; i<=15; i=i+1){
//     console.log(i)
// }

// for(let j=15; j>0; j--){
//     console.log(j)
// }

for (let i = 0; i < laptop.length; i++) {
    console.log(laptop[i])
}

console.log(laptop[1])

laptop.forEach((skaicius, indeksas) => console.log(`skaicius: ${skaicius} su indeksu ${indeksas}`))

const salyga = 15 > 12;
if (salyga) {
    console.log('sąlyga tenkina')
} else {
    console.log('sąlyga netenkina')
}


// = priskyrimas
function sum(skaiciusvienas, skaiciusdu) {
    return skaiciusvienas + skaiciusdu;
}
sum(16, 20)

function sum3(skaiciusvienas, skaiciusdu) {
    const skaiciusuma = skaiciusvienas - skaiciusdu
    console.log(skaiciusuma)
}

const sum2 = () => {

}