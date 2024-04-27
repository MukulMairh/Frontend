let itemList = [];
const itemListElement = document.getElementById('taskList');

//function to add an item to list

function AddItem() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();

    if (newItem !== '') {
        itemList.push(newItem);
        renderList();
        itemInput.value = '';
    }
}

//function to update the displayed list

function renderList() {
    itemListElement.innerHTML = '';
    itemList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span> ${item}</span> <button onclick = "updateItem(${index})">Update</button> <button onclick = "deleteItem(${index})">Delete</button>`
        itemListElement.appendChild(listItem);
    });
}

//function to update an element in list

function updateItem(index) {
    const updatedItem = prompt('Enter the updated value..');
    if (updatedItem.trim() !== '' && updatedItem !== null) {
        itemList[index] = updatedItem.trim();
        renderList();
    }
}

//function to delete the item from the list

function deleteItem(index) {
    debugger;
    itemList.splice(index, 1);
    renderList();
}