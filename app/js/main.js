var dollars = new Decimal(1.2);
var dollar_mulit = new Decimal(1.15)

setInterval(() => {
    dollars = dollars.mul(1.15)
}, 100);