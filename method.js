const peoples = [
    { name: 'max', age: 23, nationality: 'UK', budget: 4000 },
    { name: 'vika', age: 33, nationality: 'UA', budget: 1500 },
    { name: 'viktor', age: 18, nationality: 'USA', budget: 9000 },
    { name: 'volody', age: 53, nationality: 'RU', budget: 1000 },
    { name: 'marta', age: 34, nationality: 'FRA', budget: 500 },
]


// for
// _________

// for (let i = 0; i < peoples.length; i++) {
//     console.log(peoples[i])
// }

// forEach
// ____________

// peoples.forEach((element,index,arr) => {
//     console.log(element)
//     console.log(index)
//     console.log(arr)
// });

// Map
// ____

//  let arr = peoples.map((element) => {
//    return = element.budget
// });

//  console.log(arr)



// Filter
// ____________

// let arr = peoples.filter((element)=>{
//     if(element.age  >= 30)
//     return true
// })

// console.log(arr)

// reduce
// _____________


// let result = peoples.reduce((total, element) => {
// return total + element.budget
// }, 0)

// console.log(result)


// find
// _____________

// const result = peoples.find(person => person.name === 'max')

// console.log(result)


// findIndex
// ______________

// const result = peoples.findIndex(person => person.name === 'max')

// console.log(result)



