const form = document.getElementById('add-task');
const activeToDo = document.getElementById('active-todo');
const toDoTableBody = document.getElementById('table-body');

form.addEventListener('submit', function(event){

    event.preventDefault();

    var trow = document.createElement('tr');
    var tdata = document.createElement('td');

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Task";
    deleteButton.addEventListener('click', function(event){
        var deleteRow = this.parentNode.parentNode;
        deleteRow.parentNode.removeChild(deleteRow);
    })

    tdata.textContent = document.getElementById('task').value;
    tdata.appendChild(deleteButton);

    trow.appendChild(tdata);
    toDoTableBody.appendChild(trow);
})