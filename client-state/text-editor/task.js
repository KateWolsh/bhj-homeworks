const editor = document.getElementById('editor');

// при загрузке страницы проверяем, есть ли сохраненный текст в локальном хранилище
if (localStorage.getItem('text')) {
  editor.value = localStorage.getItem('text');
}

// сохраняем текст в локальном хранилище при каждом изменении в текстовом редакторе
editor.addEventListener('input', () => {
  localStorage.setItem('text', editor.value);
});
