const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]

const lowerCaseWords = (array) => new Promise((res, rej) =>{
    if(!array || array.length === 0 || !Array.isArray(array)) rej("Invalid input");
    res(array.filter((input) => isNaN(input)).map((output) => output.toLowerCase()));
})

lowerCaseWords(mixedArray)
.then((res) => console.log(res))
.catch((err) => console.log(err));