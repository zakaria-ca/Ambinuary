function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dark-mode-toggle');
    if (button) {
        button.addEventListener('click', toggleDarkMode);
    }
});
