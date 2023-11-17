console.log ('Hellow World!');
const form= document.getElementById('myForm');
const result= document.getElementById('result');
//Add a form submit event listener
form.addEventListener('submit', function (event){
    event.preventDefault();
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    result.innerHTML = `Name: ${name}<br>Email: ${email}`;
});