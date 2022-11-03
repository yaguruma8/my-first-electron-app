window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#comment-btn');
  btn.addEventListener('click', () => {
    const input = document.querySelector('#comment-input');
    if (!input.value) return;
    const li = document.createElement('li');
    li.textContent = input.value;
    document.querySelector('#comments').appendChild(li);
    input.value = '';
  });
});
