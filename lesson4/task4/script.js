const cartItemsList = document.getElementById('cartItems');
const totalPriceSpan = document.getElementById('totalPrice');

const itemAddedEvent = new Event('itemAdded');

const priceUpdatedEvent = new Event('priceUpdated');

function handleItemAdded(event) {
    let cardItems = document.getElementById('cartItems');
    let newItem = document.createElement('li');
    newItem.textContent = 'Item added to cart';
    cartItemsList.appendChild(newItem);
    document.dispatchEvent(priceUpdatedEvent);
}

function handlePriceUpdated() {
    const totalPrice = 5.00 * cartItemsList.children.length;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

document.addEventListener('itemAdded', handleItemAdded);
document.addEventListener('priceUpdated', handlePriceUpdated);

function handleAddItemButtonClick() {
    document.dispatchEvent(itemAddedEvent);
}

const addItemBtn = document.getElementById('addItemBtn');
addItemBtn.addEventListener('click', handleAddItemButtonClick);