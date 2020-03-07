const form = document.getElementById('add-task');
const activeToDo = document.getElementById('active-todo');
const toDoTableBody = document.getElementById('active-table-body');
const completedTableBody = document.getElementById('completed-table-body');

var i = 0;
form.addEventListener('submit', function(event){

    event.preventDefault();

    var trow = document.createElement('tr');
    var tdata = document.createElement('td');

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Task";

    var completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.name = `task${i}`;

    deleteButton.addEventListener('click', function(event){
        var deleteRow = this.parentNode.parentNode;
        deleteRow.parentNode.removeChild(deleteRow);
    })

    completeCheckbox.addEventListener('change', function(){
        if (this.checked)
        {
            var deleteRow = document.getElementById(this.name);
            var newRow = document.createElement('tr');
            var newData = document.createElement('td');
            
            newData.textContent = deleteRow.childNodes[1].childNodes[0].textContent;
            newRow.appendChild(newData);
            completedTableBody.appendChild(newRow);

            deleteRow.parentNode.removeChild(deleteRow);
        }
    })

    tdata.textContent = document.getElementById('task').value;
    tdata.appendChild(deleteButton);
    
    trow.id=`task${i++}`;
    trow.appendChild(completeCheckbox);
    trow.appendChild(tdata);
    toDoTableBody.appendChild(trow);
})