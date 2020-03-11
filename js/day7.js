function myFunction (a,b)
{
    return Number(a) + Number(b);
}

console.log(myFunction(3, 7));

// ES6 style:

myFunction = (a,b) => Number(a) + Number(b);

console.log(myFunction(3, 8));

myOtherFunction = (a, b) => 
{
    const myAnswer = Number(a) + Number(b);
    return myAnswer;
}

addNums = (x =0, y = 0) => x + y;

console.log(addNums());

findHighNum = ( ...args ) =>
{
    console.log(args);
    return args;
}