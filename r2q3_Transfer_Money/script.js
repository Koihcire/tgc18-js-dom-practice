// PLACE YOUR CODE HERE

document.querySelector('#topUp10').addEventListener('click', function () {
    let accBal = parseInt(document.querySelector('#account').innerHTML);
    document.querySelector('#account').innerHTML = accBal + 10;
})

document.querySelector('#transfer10ToWallet').addEventListener('click', function () {
    let accBal = parseInt(document.querySelector('#account').innerHTML);
    let walBal = parseInt(document.querySelector('#other-wallet').innerHTML);
    if (accBal >= 10) {
        document.querySelector('#account').innerHTML = accBal - 10;
        document.querySelector('#other-wallet').innerHTML = walBal + 10;
    } else {
        alert("you do not have enough money in ur account");
    }

})

document.querySelector('#transfer10ToAccount').addEventListener('click', function () {
    let accBal = parseInt(document.querySelector('#account').innerHTML);
    let walBal = parseInt(document.querySelector('#other-wallet').innerHTML);
    if (walBal >= 10){
        document.querySelector('#account').innerHTML = accBal + 10;
        document.querySelector('#other-wallet').innerHTML = walBal - 10;
    } else {
        alert("you do not have enough money in your wallet");
    }

})

document.querySelector('#spend').addEventListener('click', function () {
    let spendAmt = parseInt(document.querySelector('#spendAmt').value);
    let walBal = parseInt(document.querySelector('#other-wallet').innerHTML);
    if (walBal > spendAmt) {
        document.querySelector('#other-wallet').innerHTML = walBal - spendAmt;
    } else {
        alert("you do not have sufficient funds to spend");
    }
})
