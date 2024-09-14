function markAsBought(button) {
    const listItem = button.parentElement;
    listItem.classList.add('bought');
    button.textContent = "Comprado!";
    button.disabled = true;
}

