 
    const menuLink = Array.from(document.querySelectorAll(".menu__link"));
    const menu = Array.from(document.querySelectorAll(".menu.menu_sub"));
    const item = Array.from(document.querySelectorAll(".menu__item"));

    for (let index1 = 0; index1 < menuLink.length; index1++) {     //перебираем циклом ВСЕ пункты меню
    menuLink[index1].onclick = () => {                                 //устанавливаем событие клик на пункты меню
        for (let index = 0; index < item.length; index++) {               //перебираем циклом только вложенные пункты меню
            const menuMenu = item[index].querySelector(".menu.menu_sub"); 
            if(menuMenu != null){                                           //если в главном меню есть выпадающих список, то активируем его 
                item[index].onclick = () =>{                                // при клике выпадающее меню активируется
                menuMenu.classList.toggle("menu_active");
                return false;
            }
        }
        }      
    }
}




// item[index].addEventListener("click", function(){
//     for (let index = 0; index < item.length; index++){
//         if(item[index].closest(".menu.menu_sub") !== null){
//           menuMenu.classList.toggle("menu_active");
//           return false;
//         }
//     }
// })







