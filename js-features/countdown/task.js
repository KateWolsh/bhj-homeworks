"use strict"

const timer = document.getElementById("timer");
timer.textContent = 59; 

const addCounter = setInterval(function() {
    --timer.textContent;

    if(Number(timer.textContent) === -1){
        clearInterval(addCounter);
        alert("Вы победили в конкурсе!");
    }
  }, 1000);


  