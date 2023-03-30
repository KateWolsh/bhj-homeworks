const editor = document.getElementById('editor');

// сохраняем текст в localStorage
  editor.value = localStorage.getItem('text');

// сохраняем текст в локальном хранилище при каждом изменении в текстовом редакторе
editor.addEventListener('input', () => {
  localStorage.setItem('text', editor.value);
});
