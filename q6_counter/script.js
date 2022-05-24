//q1 + q4
document.querySelector('#increment').addEventListener('click', function () {
    let num = parseInt(document.querySelector('#box').innerText);
    if (num < 10) {
        document.querySelector('#box').innerText = num + 1;
    }
})

//q2 + q4
document.querySelector('#subtraction').addEventListener('click', function () {
    let num = parseInt(document.querySelector('#box').innerText);
    if (num > 0) {
        document.querySelector('#box').innerText = num - 1;
    }
})

//q3
document.querySelector('#reset').addEventListener('click', function () {
    document.querySelector('#box').innerText = 0;
})





