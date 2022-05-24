// PLACE YOUR CODE HERE
document.querySelector('button').addEventListener('click', function(){
    let num1 = getRandomIntInclusive(1,6);
    let num2 = getRandomIntInclusive(1,6);
    document.querySelector('.boxleft').innerHTML = num1;
    document.querySelector('.boxright').innerHTML = num2;
    
    document.querySelector('.result').innerHTML = num1 + num2;
})

function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min + 1)+min);
}