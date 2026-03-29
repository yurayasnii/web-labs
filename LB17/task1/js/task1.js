const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  const btn = document.createElement('button');
  btn.textContent = '×';
  btn.className = 'remove-btn';
  btn.addEventListener('click', () => block.remove());
  block.appendChild(btn);
});
