
const fonts = Array.from(document.querySelectorAll(".font-size"));
const control = document.querySelector(".book__control");
const book = document.querySelector(".book");

const activeClassName = "font-size_active";

for (let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener("click", (event) => {
        let fontsChildren = event.target.parentElement.children;
        for (let t = 0; t < fontsChildren.length; t++) {
            fontsChildren[t].classList.remove("font-size_active");
        }
        fonts[i].classList.add("font-size_active");
    });

}

