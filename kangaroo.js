function kangaroo(x1, v1, x2, v2) {
    let jump1 = x1
    let jump2 = x2
    let i = 0

    while (i < 10000){
        jump1 += v1
        jump2 += v2
        if (jump1 === jump2) {
            return "YES"
        }

        i++
    }

    return "NO"
}