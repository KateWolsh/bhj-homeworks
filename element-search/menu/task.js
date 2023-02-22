 
const menuLinks = Array.from(document.querySelectorAll(".menu__link")); // All 'a' elements
const menu = Array.from(document.querySelectorAll(".menu.menu_sub")); // Ul element
const listItems = Array.from(document.querySelectorAll(".menu__item")); // Li element

for (let index = 0; index < listItems.length; index++) { 
  const link = listItems[index].querySelector(".menu__link");          //перебираем циклом только вложенные пункты меню
    const menuMenu = listItems[index].querySelector(".menu.menu_sub");
    if (menuMenu !== null && link !== null) {                                          //если в главном меню есть выпадающих список, то активируем его 
        link.onclick = () => {                                // при клике выпадающее меню активируется
          menuMenu.classList.toggle("menu_active");
          return false;
        }
    }
}
