var dollars = new Decimal(1.001);
var dollar_mulit = new Decimal(1.15)
var cost1 = new Decimal(5)

document.getElementById("cost1").onclick = () => {
    if (dollars.gte(cost1) == true) {
        cost1 = cost1.pow(1.45)
        dollars = dollars.div(cost1)
        dollar_mulit = dollar_mulit.mul(1.9)
        document.getElementById("cost1").innerHTML = "Cost:" + cost1
    } else {
        alert("Not Enough Money.")
    }
}

setInterval(() => {
    dollars = dollars.mul(1.15)
    document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
}, 100);