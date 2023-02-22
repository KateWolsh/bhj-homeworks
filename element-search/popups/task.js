"use strict"

const closesModal = Array.from(document.querySelectorAll(".modal__close_times"));
const successShow = document.querySelector(".show-success");
const modal = Array.from(document.querySelectorAll(".modal"));
const activeClassName = "modal_active";

modal[0].classList.add(activeClassName); //вызываем первое модальное окно

successShow.addEventListener("click", function () {    //при клике на кнопку
  modal[0].classList.remove(activeClassName);         //первое модельное окно становится неактивно
  modal[1].classList.add(activeClassName);           //активируется второе модальное окно
})

for (let index = 0; index < closesModal.length; index++) {     //перебираем циклом массив из крестиков для закрытие окна 
  const closeModal = closesModal[index];
  closeModal.addEventListener("click", function () {         //устанавливаем на крестики событие клик 
    if (closeModal.closest("#modal_main") !== null) {        //определяем принадлежность крестика к модальному окну по индексу 
      modal[0].classList.remove(activeClassName);
    }
    else if (closeModal.closest("#modal_success") !== null) {
      modal[1].classList.remove(activeClassName);
    }
  })
}
