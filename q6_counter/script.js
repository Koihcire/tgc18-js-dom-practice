//q1 + q4
document.querySelector('#increment').addEventListener('click', function () {
    let num = parseInt(document.querySelector('#box').innerText);
    if (num < 10) {
        document.querySelector('#box').innerText = num + 1;
    }
    changeColor();
})

//q2 + q4
document.querySelector('#subtraction').addEventListener('click', function () {
    let num = parseInt(document.querySelector('#box').innerText);
    if (num > 0) {
        document.querySelector('#box').innerText = num - 1;
    }
    changeColor();
})

//q3
document.querySelector('#reset').addEventListener('click', function () {
    document.querySelector('#box').innerText = 0;
    changeColor();
})

function changeColor(){
    let num = parseInt(document.querySelector('#box').innerText);
    if (num%2==0){
        document.querySelector('#box').style.backgroundColor = 'green';
    } else {
        document.querySelector('#box').style.backgroundColor = 'red';
    }
}



