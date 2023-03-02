(() => {
const rotators = Array.from(document.querySelectorAll(".rotator__case"));
const activeClassName = "rotator__case_active";
const slidesCount = rotators.length;

let currentIndex = rotators.findIndex(rotator => rotator.classList.contains(activeClassName));

const activAdd = (Index) => {
     
      const prev = rotators[currentIndex];
      const current = rotators[Index];

      prev.classList.remove(activeClassName);
      current.classList.add(activeClassName);

      currentIndex = Index;
}

const showNextRotator = () => {
    const nextIndex = currentIndex === slidesCount - 1 ? 0 : currentIndex + 1;
    activAdd(nextIndex);
}


setInterval(showNextRotator, 1000);

})();