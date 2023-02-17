(() => {

    const items = Array.from(document.querySelectorAll(".slider__item"));
    const slidesCount = items.length;
    const activeClassName = "slider__item_active";

    let currentIndex = items.findIndex(item => item.classList.contains(activeClassName));

    const setCurrentSlide = (Index) => {
        const prev = items[currentIndex];
        const current = items[Index];


        prev.classList.remove(activeClassName);
        current.classList.add(activeClassName);

        currentIndex = Index;
    }

    const showNextSlide = () => {
        const nextIndex = currentIndex === slidesCount - 1 ? 0 : currentIndex + 1;
        setCurrentSlide(nextIndex);
    }

    const showPrevSlide = () => {
        const nextIndex = currentIndex === 0 ? slidesCount - 1 : currentIndex - 1;
        setCurrentSlide(nextIndex);
    }

    document.addEventListener("click", e => {
        const target = e.target.closest(".slider__arrow");
        if (!target) {
            return;
        }
        const isNext = target.classList.contains("slider__arrow_next")
        if (isNext) {
            return showNextSlide();
        }
        showPrevSlide();
    })

})();