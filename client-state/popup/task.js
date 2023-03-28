const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalActiveClass = 'modal_active';
const cookieName = 'modal_closed';

// Проверяем, есть ли в cookie информация о закрытии окна
const isModalClosed = document.cookie.includes(cookieName);

// Если в cookie информация о закрытии отсутствует, показываем окно
if (!isModalClosed) {
  modal.classList.add(modalActiveClass);
}

// Обработчик клика по кнопке закрытия окна
modalClose.addEventListener('click', function() {
  modal.classList.remove(modalActiveClass);
  
  // Записываем в cookie информацию о закрытии окна на сутки
  const expires = new Date(Date.now() + 86400000).toUTCString(); 
  document.cookie = `${cookieName}=true; expires=${expires}`;
});


