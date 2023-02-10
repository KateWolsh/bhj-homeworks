"use strict"

const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

clickerCounter.textContent = 0;

cookie.onclick = function () {
    Number(++clickerCounter.textContent);
    let clickPlick = clickerCounter.textContent;
    if (clickPlick % 2 == 0) {
        cookie.width = 300;
    }
    else {
        cookie.width = 100;
    }
}
