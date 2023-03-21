const input = document.getElementById("task__input");
const tasks = document.querySelector(".tasks__list");
const taskAdd = document.getElementById("tasks__add");

taskAdd.addEventListener("click", function (event) {
    if (event.target && input.value.trim() !== "") {
        const valueTask = input.value;
        tasks.innerHTML += `
        <div class="task">
            <div class="task__title">${valueTask}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
        input.value = "";
    }
    event.preventDefault();
});

tasks.addEventListener("click", function (event) {
    if (event.target.classList.contains("task__remove")) {
      event.preventDefault();
      event.target.parentElement.remove();
    }
  });