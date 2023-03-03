
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
        event.preventDefault();
    }, false);
    
}

for (let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener("click", () => {
      if(fonts[i].classList.contains("font-size_small")){
        book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small");
      }
      else if(fonts[i].classList.contains("font-size_big")){
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big");
      }else{
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
      }
      
    }, false);
}   

