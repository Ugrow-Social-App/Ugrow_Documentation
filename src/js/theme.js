// Elements
const body = document.body;

// Function to get the theme from browser storage and update the content
const getTheme = () => {
    const theme = localStorage.getItem('theme') || 'system';
    // If the theme is system, then the application get the look OS theme 
    if (theme == 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (systemPrefersDark.matches) {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }
    body.classList.value = theme;
}

// Function to change the theme and update the content
const setTheme = (theme) => {
    if (theme != null || theme != "") {
        localStorage.setItem('theme', theme);
    } else {
        localStorage.setItem('theme', 'system');
    }
    getTheme();
}

getTheme();