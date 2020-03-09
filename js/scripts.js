var myNav = document.querySelector('nav');
var myNavButton = document.querySelector('.menu-button');

myNavButton.addEventListener('click', function(event){
    event.preventDefault();

    myNav.classList.toggle('nav-open');
})

function Person (name, age, hobbies)
{
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.sayGoodbye = function()
    {
        document.body.innerHTML += `
        <p>
            This is <strong>${this.name}</strong>
            saying <em>goodbye</em>!
        </p>
    `;
    }    
};

var Bill = new Person("Bill", 55, ["Gettin' er done", "Muddin'", "Drinkin'"]);

Person.prototype.introduction = function()
{
    var hobbiesString = `<ul>`;
    this.hobbies.forEach(function (value, index)
    {
        hobbiesString += `<li>${value}</li>`
    });
    hobbiesString += `</ul>`;

    document.body.innerHTML += `
        <h2> ${this.name} </h2>
        <dl>
            <dt>Age</dt>
            <dd> ${this.age} </dd>
            <dt>Hobbies</dt>
            <dd>${hobbiesString}</dd>
        </dl>
        `;
}


