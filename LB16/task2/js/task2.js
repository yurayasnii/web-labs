document.getElementById('editBtn').addEventListener('click', () => {
    const div = document.getElementById('editableDiv');
    const newText = prompt('Введіть новий текст:', div.textContent);
    if (newText !== null) {
        div.textContent = newText;
    }
});
