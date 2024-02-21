function handleClick() {
    alert('Button was clicked');
}

function handleMouseOver() {
    document.body.style.background = 'green';
}

function handleMouseOut() {
    document.body.style.background = '';
}

let button = document.getElementById('myButton');

button.addEventListener('click', handleClick);
button.addEventListener('mouseover', handleMouseOver);
button.addEventListener('mouseout', handleMouseOut);

