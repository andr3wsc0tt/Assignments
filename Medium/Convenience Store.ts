function changeEnough(change : Array<number> , amountDue : number) : boolean {
    let sum : number = 0;
    sum += change[0] * .25;
    sum += change[1] * .10;
    sum += change[2] * .05;
    sum += change[3] * .01;

    if (sum >= amountDue)
        return true;
    else
        return false;
}
