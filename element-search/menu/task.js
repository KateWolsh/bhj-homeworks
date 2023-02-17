const menuLink = Array.from(document.getElementsByClassName("menu__link"));
const menu = Array.from(document.getElementsByClassName("menu menu_sub"));
const item = Array.from(document.getElementsByClassName("menu__item"));



for (let index1 = 0; index1 < menuLink.length; index1++) {
    menuLink[index1].onclick = () => {
        for (let index = 0; index < item.length; index++) {
            const menuMenu = item[index].querySelector(".menu.menu_sub");
            if(menuMenu != null){
                item[index].onclick = () =>{
                menuMenu.classList.add("menu_active");
                return false;
            }
        }
        }      
    }
}
