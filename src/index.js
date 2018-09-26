// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = [50, 25, 10, 5, 1], num,
        coinsName = ['H', 'Q', 'D', 'N', 'P'];
    rich = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    answer = {    };
    if (currency > 10000) return rich;
    if (currency < 0) return answer;
    for (let i = 0; i < 5; i++)
    {
        num = Math.floor(currency / coins[i]);
        if (num != 0) answer[coinsName[i]] = num;
        currency -= num * coins[i];
    }
    return answer;
}
