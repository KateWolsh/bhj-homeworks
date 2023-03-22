//получвем ссылки на форму и индикатор выполнения
const form = document.getElementById('form');
const progressBar = document.getElementById('progress');

//добавляем прослушиватель к событию отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();

//создаем новый объект xhr и открываем POST запрос по ссылке
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  //добавляем прослушиватель к событию загрузки
  xhr.upload.addEventListener('progress', (event) => {
    //проверяем истинно ли свойство lengthComputable (известен ли общий размер файла)
    if (event.lengthComputable) {
//вычисляем процент загруженности файла и обновляем его значение индикатора выполнения
      const percentComplete = (event.loaded / event.total) * 100;
      progressBar.value = percentComplete;
    }
  });
//отправляем данные формы
  xhr.send(new FormData(form));
});
