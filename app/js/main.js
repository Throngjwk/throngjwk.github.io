var dollars = new Decimal(1.001);
var dollar_mulit = new Decimal(1.15)

setInterval(() => {
    dollars = dollars.mul(1.15)
    document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
}, 100);