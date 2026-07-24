const darkModeToggle = document.querySelector('.darkmode');
const darkModeIcon = darkModeToggle.querySelector('img');
const htmlElement = document.documentElement;

const SUN_ICON = 'assets/icons/sun.svg';
const MOON_ICON = 'assets/icons/moon.svg';
const STORAGE_KEY = 'theme';

const applyTheme = (isDark) => {
    htmlElement.classList.toggle('dark', isDark);
    darkModeIcon.src = isDark ? MOON_ICON : SUN_ICON;
};

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem(STORAGE_KEY);
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

darkModeToggle.addEventListener('click', () => {
    const isDark = !htmlElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
});
