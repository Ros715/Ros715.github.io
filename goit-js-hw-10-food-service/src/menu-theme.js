const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');
switchRef.addEventListener('change', () => {
    //console.log(switchRef.checked);
    if (switchRef.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
});

if (localStorage.getItem('theme') === Theme.DARK) {
    switchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
}
