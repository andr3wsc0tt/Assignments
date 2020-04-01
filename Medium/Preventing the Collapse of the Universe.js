function catchZeroDivision(expr) {
    if (eval(expr) == Infinity || isNaN(eval(expr)))
        return true;
    else
        return false;
}
//# sourceMappingURL=main.js.map