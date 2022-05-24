// PLACE YOUR CODE HERE
//q1
let emp = document.querySelectorAll('.emphasis');
for (let e of emp) {
    e.style.fontFamily = 'Verdana';
}

//q2
let list = document.querySelectorAll('li.finished');
for (let l of list){
    l.style.textDecoration = 'line-through';
}

//q3
let todo = document.querySelectorAll('ul#low-priority li.todo');
for (let t of todo){
    t.style.backgroundColor = 'blue';
}

//q4
let alert = document.querySelectorAll('.alert');
for (let a of alert){
    a.style.color = 'red';
}


