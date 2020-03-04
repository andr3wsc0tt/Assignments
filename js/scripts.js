var myObject = {
    firstName: 'Andrew',
    lastName: 'Scott',
    
    sayHello: function()
    {
        var newP = document.createElement('p');
        newP.textContent = "Hey There!";
        document.body.appendChild(newP);
        document.body.innerHTML += `
        <dl>
            <dt>First Name:</dt> <!-- Comment --!>
            <dd> ${this.firstName} </dd>
            <dt>Last Name:</dt>  <!-- Comment --!>
            <dd> ${this.lastName} </dd>
        </dl>
        `;
    }
}

myObject.sayHello();