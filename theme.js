
function toggleDarkMode() {
    const checkbox = document.getElementById('checkbox');
    const isLightMode = checkbox.checked;

    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    document.body.classList.toggle('light-mode', isLightMode);
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('checkbox').checked = false;

    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.getElementById('checkbox').checked = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
});

applySavedTheme();
