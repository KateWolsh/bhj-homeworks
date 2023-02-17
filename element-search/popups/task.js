"use strict"

const modalAdd = document.getElementById("modal_main");
const closeModal = document.getElementsByClassName("modal__close");
const successShow = document.querySelectorAll(".show-success");
const modalSucces = document.getElementById("modal_success");

function showPopup() {
    modalAdd.style.display = 'flex';
  }
  
  window.onload = showPopup();

closeModal.item(0).addEventListener('click', function (){
  modalAdd.style.display = 'none';
})

successShow.item(0).addEventListener('click', function (){
  modalSucces.style.display = 'flex';
})
