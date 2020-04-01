function catchZeroDivision(expr : string) : boolean{
    if (eval(expr) == Infinity || isNaN(eval(expr)))
        return true;
    else
        return false;
}