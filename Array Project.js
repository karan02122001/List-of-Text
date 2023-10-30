const textAreas = [];

function addTextArea() {
    const textAreasItem = document.createElement("div");
    textAreasItem.classList.add('text-area-item');
    textAreasItem.innerHTML = `
        <textarea rows="4" cols="15"></textarea>
        <button class="update-button">Update</button>
        <button class="delete-button">Delete</button>
    `;
    document.getElementById('text-areas-container').appendChild(textAreasItem);

    const updatebutton = textAreasItem.querySelector('.update-button');
    const deletebutton = textAreasItem.querySelector('.delete-button');

    updatebutton.addEventListener('click', () => updateTextArea(textAreasItem));
    deletebutton.addEventListener('click', () => deleteTextArea(textAreasItem));

    textAreas.push(textAreasItem);
}

function updateTextArea(textAreasItem) {
    const textAreas = textAreasItem.querySelector('textarea');
    const newText = prompt('Enter Updated Text:' , textAreas.value);
    if (newText !== null) {
        textAreas.value = newText;
    }
}

function deleteTextArea(textAreasItem) {
    const index = textAreas.indexOf(textAreasItem);
    if (index !== -1) {
        textAreas.splice(index, 1);     
        textAreasItem.remove();
    }
}

document.getElementById('add-button').addEventListener('click', addTextArea);