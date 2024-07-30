// Get references to the necessary HTML elements
const taskInput = document.getElementById('tf-1') as HTMLInputElement;
const table = document.getElementById('table') as HTMLTableElement;
const numberCells = document.getElementsByClassName('number') as HTMLCollectionOf<HTMLTableCellElement>;

// Function to add a new task
function add(): void {
    // Check if the task input is empty
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new row in the table
    const newRow = table.insertRow(-1);

    // Add cells to the new row
    const taskCell = newRow.insertCell(0);
    const taskTextCell = newRow.insertCell(1);
    const completeCell = newRow.insertCell(2);
    const deleteCell = newRow.insertCell(3);
    const editCell = newRow.insertCell(4);

    // Set the values of the cells
    const rowCount = table.rows.length;
    taskCell.textContent = rowCount.toString();
    taskTextCell.textContent = taskInput.value;
    completeCell.innerHTML = '<button onclick="completed()">Done</button>';
    deleteCell.innerHTML = '<button onclick="del()">delete</button>';
    editCell.innerHTML = '<button onclick="edit()">Edit</button>';

    // Clear the task input
    taskInput.value = '';
}

// Function to mark a task as completed
function completed(): void {
    const taskCell = (event.target as HTMLElement).closest('tr')!.cells[1] as HTMLTableCellElement;

    // Toggle the text decoration of the task text
    if (taskCell.style.textDecoration === 'line-through') {
        taskCell.style.textDecoration = 'none';
    } else {
        taskCell.style.textDecoration = 'line-through';
    }
}

// Function to delete a task
function del(): void {
    const deletedRow = (event.target as HTMLElement).closest('tr')!;
    deletedRow.parentNode!.removeChild(deletedRow);

    // Update the row numbers
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = (i + 1).toString();
    }
}

// Function to edit a task
function edit(): void {
    const editCell = (event.target as HTMLElement).closest('tr')!.cells[1] as HTMLTableCellElement;
    editCell.contentEditable = 'true';
}