//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

//Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

//Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

function timeConversion(s) {
    const pmOrAm = s[8]
    const midNigthOrNoon = s[0] + s[1]
    let newFomat = ''
    let hours = Number(s[0] + s[1])
    let minutes = s.slice(2,8) 
     
     if (pmOrAm === "A" && midNigthOrNoon === '12'){
         hours = '00'
     } 
     else if (pmOrAm === "P" && midNigthOrNoon === '12'){
         hours = '12'
     }
    else if (pmOrAm === "P"){
        hours = hours + 12
    }
    else if (pmOrAm === "A"){
        if (hours < 10){
            hours = '0' + hours
        }
        
    }
    newFomat = hours + minutes

    return newFomat
 }


 console.log(timeConversion('06:40:03AM'))
 console.log(timeConversion('04:59:59AM'))
 