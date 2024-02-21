let text = document.getElementById('textInput');


function handleKeyDown() {

    console.log('Key Code:', event.keyCode);

    if (event.keyCode === 13) {
        event.preventDefault();

        alert('Entered text: ' + textInput.value);
    }
}

text.addEventListener('keydown', handleKeyDown);

function handleKeyUp(event) {
    console.log('Key released:', event.key);
}

textInput.addEventListener('keyup', handleKeyUp);

function handleKeyPress(event) {
    console.log('Key pressed:', event.key);
}

textInput.addEventListener('keypress', handleKeyPress);