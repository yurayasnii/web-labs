document.getElementById('addBtn').addEventListener('click', () => {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.textContent = 'Новий елемент';
    div.style.backgroundColor = '#4CAF50';
    div.style.color = '#fff';
    div.style.padding = '15px 20px';
    div.style.borderRadius = '8px';
    container.appendChild(div);
});
