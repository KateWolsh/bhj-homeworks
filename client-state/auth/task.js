
//Получаем доступ к форме HTML
const form = document.getElementById('signin__form');
//Навешиваем слушателя к событию отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();

  //отправляем POST запрос
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {

        // Если запрос успешный, то сохраняем ID
        localStorage.setItem('userId', response.user_id);

        // Выводим блок об успешной авторизации
        const welcomeBlock = document.getElementById('welcome');
        const userIdSpan = welcomeBlock.querySelector('#user_id');
        userIdSpan.textContent = response.user_id;
        welcomeBlock.classList.add('welcome_active');
      } else {
        // В случае неуспешной авторизации выводим сообщение об ошибке
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Неверный логин/пароль';
        form.appendChild(errorMessage);
      }
    }
  };
  xhr.send(formData);
});
