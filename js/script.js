const form = document.getElementById('add-task');
const activeToDo = document.getElementById('active-todo');
const toDoTableBody = document.getElementById('active-table-body');
const completedTableBody = document.getElementById('completed-table-body');

var i = 0;

form.addEventListener('submit', function (event) {

    event.preventDefault();

    var trow = document.createElement('tr');
    var tdata = document.createElement('td');

    // Delete Button 

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Task";

    deleteButton.addEventListener('click', function (event) {
        var deleteRow = this.parentNode;
        deleteRow.parentNode.removeChild(deleteRow);
    })

    // Edit Button

    var editButton = document.createElement('button');
    editButton.textContent = "Edit Task";

    editButton.addEventListener('click', function(event){
        var tRow = this.parentNode;
        var newTask = prompt("What would you like the new task to be?", tRow.childNodes[1].textContent);
        if (newTask != null)
            tRow.childNodes[1].textContent = newTask;
    })

    // Checkbox (Completed Criteria)

    var completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.name = `task${i}`;

    completeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            var deleteRow = document.getElementById(this.name); // Input name is task{n}
            var newRow = document.createElement('tr');
            var newData = document.createElement('td');

            newData.textContent = deleteRow.childNodes[1].textContent; // get td.textContent ==> <tr < [0]input >< [1]td >< [2]button >< [3]button >>
            newData.className = "data-class";
            newRow.appendChild(newData);
            completedTableBody.appendChild(newRow);

            deleteRow.parentNode.removeChild(deleteRow);
        }
    })



    tdata.textContent = document.getElementById('task').value;
    tdata.className = "data-class";

    trow.appendChild(completeCheckbox);
    trow.appendChild(tdata);
    trow.appendChild(deleteButton);
    trow.appendChild(editButton);

    trow.id = `task${i++}`;
    
    toDoTableBody.appendChild(trow);
})