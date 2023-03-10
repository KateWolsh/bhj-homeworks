const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    const nestedList = checkbox.parentElement.nextElementSibling;
    if (nestedList) {
      const nestedCheckboxes = nestedList.querySelectorAll('.interest__check');
      nestedCheckboxes.forEach((nestedCheckbox) => {
        nestedCheckbox.checked = checkbox.checked;
      });
    }
  });
});







