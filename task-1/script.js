function add(){
    
    let task = document.getElementById('tf-1')
    
    //checking for empty field
    if (task.value.trim() === ''){
        alert('please enter a task')
        return;
    }
    

    let table = document.getElementById('table')
    let role = document.getElementsByClassName('number')
    // adding new row 
    let newrow = table.insertRow(-1);

    // adding columns to row 
    let taskrol = newrow.insertCell(0)
    let taskcol = newrow.insertCell(1)
    let taskcomp = newrow.insertCell(2)
    let taskdel = newrow.insertCell(3)
    let taskedit = newrow.insertCell(4)

    let rowcount = table.rows.length
    
    // setting the values 
    taskrol.textContent = rowcount
    taskcol.textContent = task.value
    taskcomp.innerHTML = '<button onclick="completed()">Done</button> ';
    taskdel.innerHTML = '<button onclick="del()">delete</button> ';
    taskedit.innerHTML = '<button onclick="edit()">Edit</button> ';
    task.value = ''
}

function completed(){
    let taskcell = event.target.closest('tr').cells[1]

    if (taskcell.style.textDecoration == 'line-through'){
        taskcell.style.textDecoration = 'none'
    }
    else{
        taskcell.style.textDecoration = 'line-through'
    }
}

function del(){

    let drow = event.target.closest('tr')
    drow.parentNode.removeChild(drow)

    let row = table.rows;

    for(let i = 0; i < row.length ; i++){
        row[i].cells[0].textContent = i+1;
    }

}

function edit(){
    let ed = event.target.closest('tr').cells[1]
    ed.contentEditable ='true'

}