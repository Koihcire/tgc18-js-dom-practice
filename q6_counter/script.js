//always check with elements have id / class for easy selection, if no then create
//test everything as it goes

//q1 + q4
document.querySelector('#increment').addEventListener('click', function () {
    let num = parseInt(document.querySelector('#box').innerHTML);
    if (num < 10) {
        document.querySelector('#box').innerHTML = num + 1;
    }
    changeColor();
})

//q2 + q4
document.querySelector('#subtraction').addEventListener('click', function () {
    let num = parseInt(document.querySelector('#box').innerHTML);
    if (num > 0) {
        document.querySelector('#box').innerHTML = num - 1;
    }
    changeColor();
})

//q3
document.querySelector('#reset').addEventListener('click', function () {
    document.querySelector('#box').innerHTML = 0;
    changeColor();
})

function changeColor(){
    let num = parseInt(document.querySelector('#box').innerHTML);
    if (num%2==0){
        document.querySelector('#box').style.backgroundColor = 'green';
    } else {
        document.querySelector('#box').style.backgroundColor = 'red';
    }
}



