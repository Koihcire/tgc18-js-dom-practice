// PLACE YOUR CODE HERE
let a = document.querySelectorAll('.a');
for (let i of a) {
    i.style.backgroundColor = 'red';
    let name = i.innerText;
    i.innerText = name + ' (jailed)';
    
}

let u = document.querySelectorAll('.undercover');
// for (let x of u){
//     x.style.backgroundColor = 'yellow';
// }

for (let i = 0; i<a.length; i++){
    for (let j = 0; j<u.length; j++){
        if (a[i] == u[j]){
            a[i].style.backgroundColor = 'yellow';
        }
    }
}


