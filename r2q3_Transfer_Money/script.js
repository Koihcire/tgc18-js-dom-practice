// PLACE YOUR CODE HERE

document.querySelector('#topUp10').addEventListener('click', function(){
    let accBal = parseInt(document.querySelector('#account').innerHTML);
    document.querySelector('#account').innerHTML = accBal + 10;
})

document.querySelector('#transfer10ToWallet').addEventListener('click', function(){
    let accBal = parseInt(document.querySelector('#account').innerHTML);
    let walBal = parseInt(document.querySelector('#other-wallet').innerHTML);
    document.querySelector('#account').innerHTML = accBal - 10;
    document.querySelector('#other-wallet').innerHTML = walBal + 10;
})

document.querySelector('#transfer10ToAccount').addEventListener('click', function(){
    let accBal = parseInt(document.querySelector('#account').innerHTML);
    let walBal = parseInt(document.querySelector('#other-wallet').innerHTML);
    document.querySelector('#account').innerHTML = accBal + 10;
    document.querySelector('#other-wallet').innerHTML = walBal - 10;
})

document.querySelector('#spend').addEventListener('click', function(){
    let spend = parseInt(document.querySelector('#spendAmt').value);
    let walBal = parseInt(document.querySelector('#other-wallet').innerHTML);
    document.querySelector('#other-wallet').innerHTML = walBal - spend;

})
