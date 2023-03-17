const alltooltips = Array.from(document.querySelectorAll(".has-tooltip"));

function toolTipsActive(e) {
  e.preventDefault();

  const deletableElement = document.querySelector(".tooltip_active");
  if (deletableElement) {
    deletableElement.remove();
  }

  const tipText = this.title;
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip tooltip_active';
  tooltip.textContent = tipText;
  this.insertAdjacentElement('beforeend', tooltip);

  const coords = this.getBoundingClientRect();
  tooltip.style.left = coords.left + "px";
  tooltip.style.top = coords.bottom + "px";
}

alltooltips.forEach((element) => {
  element.addEventListener('click', toolTipsActive);
});
