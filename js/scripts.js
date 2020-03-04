var formElement = document.getElementById('form-id'); // <form id="form-id" method="get" action="#"> Gets the form

formElement.addEventListener('submit', function(event) // <input type="submit" value="submit"> Waits for the submit button input
{

    event.preventDefault(); // Prevents the submission
 
    var name = document.getElementById('name');  // <input type="text" id="name" name="name"></input>
    var age = document.getElementById('age'); // <input type="number" id="age" name="age">
    var school_class = document.getElementById('school_class'); // <input type="text" id="school_class" name="school_class">
    var city = document.getElementById('city'); // <input type="text" id="city" name="city"></input>

    var tableElement = document.getElementById('table-id').getElementsByTagName('tbody')[0]; // <table id="table-id"> AND <tbody id="table-body">
    
    var tableRow = tableElement.insertRow(); // Add new row

    var tableData1 = tableRow.insertCell(); // Insert Data
    tableData1.textContent = name.value; // Assign Name
    var tableData2 = tableRow.insertCell(); // Insert Data
    tableData2.textContent = age.value; // Assign Age
    var tableData3 = tableRow.insertCell(); // Insert Data
    tableData3.textContent = school_class.value; // Assign School Class
    var tableData4 = tableRow.insertCell(); // Insert Data
    tableData4.textContent = city.value; // Assign City

}
);