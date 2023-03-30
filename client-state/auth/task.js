//Получаем доступ к HTML-элементам
const form = document.getElementById('signin__form');
const formBlock = document.querySelector('.signin');
const welcomeBlock = document.getElementById('welcome');
const userId = localStorage.getItem('userId');
const userIdSpan = welcomeBlock.querySelector('#user_id');

//проверяем есть ли в LocalStorage ID пользователя
if (userId) {
  userIdSpan.textContent = userId;
  welcomeBlock.classList.add('welcome_active');
  formBlock.classList.remove('signin_active');
}

//Навешиваем слушателя к событию отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();
 //отправляем POST запрос
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);

  xhr.onload = function() {
    // Если запрос успешный, то сохраняем ID
    if (xhr.response.success == true) {
      const response = xhr.response;
      localStorage.setItem('userId', response.user_id);
      form.reset();
    // Выводим блок об успешной авторизации
      userIdSpan.textContent = response.user_id;
      welcomeBlock.classList.add('welcome_active');
      formBlock.classList.remove('signin_active');
    } else {
        // В случае неуспешной авторизации выводим сообщение об ошибке
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Неверный логин/пароль';
        form.appendChild(errorMessage);
    }
  };
});

