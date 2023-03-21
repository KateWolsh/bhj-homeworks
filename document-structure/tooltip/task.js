const alltooltips = Array.from(document.querySelectorAll(".has-tooltip"));
let activeTooltip = null;

function toolTipsActive(e) {
  e.preventDefault();

  const tooltip = this.nextElementSibling;
  if (tooltip && tooltip.classList.contains('tooltip_active')) {
    tooltip.remove();
    activeTooltip = null;
    return;
  }

  if (activeTooltip) {
    activeTooltip.remove();
  }

  const tipText = this.title;
  const newTooltip = document.createElement('div');
  newTooltip.className = 'tooltip tooltip_active';
  newTooltip.textContent = tipText;
  this.insertAdjacentElement('afterend', newTooltip);

  const coords = this.getBoundingClientRect();
  newTooltip.style.left = coords.left + "px";
  newTooltip.style.top = coords.bottom + "px";

  activeTooltip = newTooltip;
}

alltooltips.forEach((element) => {
  element.addEventListener('click', toolTipsActive);
});
