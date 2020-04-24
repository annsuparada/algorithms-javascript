//You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

//For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.


//Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

function birthdayCakeCandles(ar) {

    let repeatNum = []
    let tallest = 0
    
        for (let i = 0; i < ar.length; i ++){
            if (ar[i] >= tallest){
                tallest = ar[i]
                //if we find greater num and we have less num in the array 
                //remove less num
                if (repeatNum.length > 0 && repeatNum[0] < tallest){
                    repeatNum.pop()
                }
    
                repeatNum.push(tallest)
            }
        }
     
        return repeatNum.length
    }

console.log(birthdayCakeCandles([4,1,3,4])) //2