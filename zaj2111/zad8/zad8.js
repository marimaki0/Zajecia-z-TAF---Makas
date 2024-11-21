const list = document.getElementById('list');
const form = document.getElementById('form');
const newItemInput = document.getElementById('newItem');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const newItemText = newItemInput.value.trim(); 

    if (newItemText !== '') {
        const newItem = document.createElement('li'); 
        newItem.textContent = newItemText; 
        list.appendChild(newItem); 
        newItemInput.value = ''; 
    }
});
