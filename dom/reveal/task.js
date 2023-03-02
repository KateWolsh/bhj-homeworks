const reveals = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener('scroll', function() {
    for (let index = 0; index < reveals.length; index++) {
        let revealTop = reveals[index].getBoundingClientRect().top;
        let revealBottom = reveals[index].getBoundingClientRect().bottom;
        if(revealTop > 0 && revealBottom < window.innerHeight){
            reveals[index].classList.add("reveal_active");
        }
    }  
  });
