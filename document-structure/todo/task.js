const input = document.getElementById("task__input");
const tasks = document.querySelector(".tasks__list");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
        const valueTask = input.value;
        tasks.innerHTML += `
        <div class="task">
            <div class="task__title">${valueTask}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
        event.preventDefault();
        input.value = "";
    }
});

tasks.addEventListener("click", function (event) {
    if (event.target.classList.contains("task__remove")) {
      event.preventDefault();
      event.target.parentElement.remove();
    }
  });