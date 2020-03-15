function rotLeft(a, d) {
    let newAr = []
    for (let i = d; i < a.length; i++){
        newAr.push(a[i])
    }
    for (let i = 0; i < d; i++){
        newAr.push(a[i])
    }

    return newAr
}

