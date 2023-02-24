const btnMenu = document.querySelector(".dropdown");
const itemValue = document.querySelector(".dropdown__value");
const activeMenu = document.querySelector(".dropdown__list");

const lists = Array.from(document.querySelectorAll("dropdown__list"));
const links = Array.from(document.querySelectorAll(".dropdown__link"));

btnMenu.addEventListener("click", function () {
    activeMenu.classList.toggle("dropdown__list_active");
})

for (let index = 0; index < links.length; index++) {
    const link = links[index];
    link.onclick = () => {
        itemValue.textContent = link.textContent;
        return false;
    }

}
