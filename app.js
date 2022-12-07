var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var sol = document.getElementById("solana");
var apt = document.getElementById("aptos");
var near = document.getElementById("near");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Captos%2Cnear&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    sol.innerHTML = response.solana.usd;
    apt.innerHTML = response.aptos.usd;
    near.innerHTML = response.near.usd;

});