// TYPESCRIPT
function addUp(num: number) : number {
    let nums : number  = 0;
    for (let i = 1; i <= num; i++)
    {
        nums += i;
    }
    return nums;
}

console.log(addUp(4));