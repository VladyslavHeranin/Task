let num = ['one', 'two', 'three']


num.forEach(word => {
    console.log(word)
    if (word === 'two') {
        num.shift()
    }
})
