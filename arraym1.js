const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

let findSpiderMan = array => array.find(({ name }) => name === 'Spiderman');

console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

let doubleArrayValues = array => array.map(x => x * 2);

console.log(doubleArrayValues([1, 2, 3]))
// result should be [2, 4, 6]


let containsNumberBiggerThan10 = array => array.some(x => x > 10);


console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))
// result should be false


let isItalyInTheGreat7 = array => array.includes('Italy')

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// result should be true
let array2 = [];
let tenfold = array => {
    array.forEach(element => {
        array2.push(element * 10)
    })
    return array2;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]


let isBelow100 = array => array.some(x => x < 100);

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false


/* let bigSum = array => {
    let total = array.reduce((subTotal, item) => {
        item + subTotal
    }, 0);
    return total;
} */


function total(array) {
    array.reduce((cTotal, item) => {
        return item + cTotal
    }, 0)
}



let bigSum = array => array.reduce((cTotal, item) => item + cTotal, 0)

//total()
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118

