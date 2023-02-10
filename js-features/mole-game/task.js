"use strict"

let dead = document.getElementById("dead");
let lost = document.getElementById("lost"); 

for (let index = 1; index <= 9; index++) {
    
    let hole = document.getElementById(`hole${index}`);
    
    hole.addEventListener('click', function () {

     if (hole.className.includes("hole_has-mole")) {
        Number(++dead.textContent);
        if (Number(dead.textContent) === 11) {
            alert("Вы победили!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    } else {
        Number(++lost.textContent);
        if (Number(lost.textContent) === 6) {
            alert("Вы проиграли");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }

    });
 }


