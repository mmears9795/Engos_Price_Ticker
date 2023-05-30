import fetch from 'node-fetch';

let engosPrice = await getPrice();

console.log(engosPrice);

async function getPrice() {
    try {
        const url = "https://deep-index.moralis.io/api/v2/erc20/0x5548498f6ae923f590cd1a1cec8d39e1f9363104/price?chain=eth&exchange=0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-API-Key': "tiefYj9XLzqONnL3i5Drw2GSZeeQQcGdTjmq3r3MqrpaWDu1B50DyzJeEXh8pjW4",
            }
        });
        const data = await response.json();
        let ethPrice = (data.nativePrice.value / (10**18)).toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 15 });
        let tempUSDPrice = (data.usdPrice);

        let usdPriceString = tempUSDPrice.toString();

        tempUSDPrice = usdPriceString.split('e-');

        let usdPrice = (tempUSDPrice[0] / (10**tempUSDPrice[1])).toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 11 });
        // console.log("ethPrice " + ethPrice);

        return("$" + usdPrice);
    } catch(error) {
        console.log(error);
        // getPrice();
    }
}