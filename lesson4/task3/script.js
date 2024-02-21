let myList = document.getElementById('myList');

var itemsData = ['Item 1', 'Item 2', 'Item 3'];

function createListItems() {
    itemsData.forEach(itemText => {
        let li = document.createElement('li');
        li.textContent = itemText;
        myList.appendChild(li);
    });
}

myList.addEventListener('click', event => {
    if(event.target.tagName === 'LI'){
        let clickedItemText = event.target.textContent;
        console.log('Clicked Item:', clickedItemText);
    }
});

createListItems();
