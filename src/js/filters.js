function logSelectedOption(event) {
    const selectElement = event.target;
    console.log(`Dropdown ID: ${selectElement.id}, Selected Value: ${selectElement.value}`);
}

document.querySelectorAll('.dropdown-select').forEach(function(select) {
    select.addEventListener('change', logSelectedOption);
});