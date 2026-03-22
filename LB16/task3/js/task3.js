document.getElementById('toggleBtn').addEventListener('click', () => {
    const block = document.querySelector('.toggleable');
    block.style.display = block.style.display === 'none' ? '' : 'none';
});
