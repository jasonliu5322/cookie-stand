'use strict';

var seattle = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale:6.3,
};

function randomCustNum(max, min){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

var cookiesSeattle = [];
var result = 'Seattle<br><br>';
var totalCookies = 0;
for(var i = 0; i < 14; i++){
    cookiesSeattle[i] = Math.floor(randomCustNum(seattle.maxCustomer, seattle.minCustomer) * seattle.avgCookieSale);
    totalCookies += cookiesSeattle[i];
    if(i < 6)
        result += `\xa0\xa0\xa0\xa0\xa0\xa0\xa0• ${i + 6} am: ${cookiesSeattle[i]} cookies<br>`;
    else if(i === 6)
        result += `\xa0\xa0\xa0\xa0\xa0\xa0\xa0• ${i + 6} pm: ${cookiesSeattle[i]} cookies<br>`;
    else
        result += `\xa0\xa0\xa0\xa0\xa0\xa0\xa0• ${i - 6} pm: ${cookiesSeattle[i]} cookies<br>`;
}
result += `\xa0\xa0\xa0\xa0\xa0\xa0\xa0• Total: ${totalCookies} cookies`;
document.write(result);
