function dayTrading(capital, percentGain, days) {
  let balance = capital;
  for (let i = 0; i < days; i++) {
    let temp = (balance * percentGain) / 100;
    balance = balance + temp;
  }

  let profit = balance - capital;
  let result = {
    capital: capital,
    balance: Number(balance.toFixed(2)),
    profit: Number(profit.toFixed(2)),
  };

  return result;
}

function detailDayTrading(capital, percentGain, days) {
  let balance = capital;
  let result = {};
  for (let i = 0; i < days; i++) {
    let temp = (balance * percentGain) / 100;
    balance = balance + temp;

    let profit = balance - capital;
    result[i + 1] = {
      balance: Number(balance.toFixed(2)),
      profit: Number(profit.toFixed(2)),
    };
  }

  return result;
}

// console.log(dayTrading(4000, 1.5, 20));
console.log(detailDayTrading(6000, 1.5, 480));
