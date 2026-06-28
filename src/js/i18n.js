// Available languages and their file paths
const pathsLanguage = {
    'en': './src/i18n/en.json',
    'pt-br': './src/i18n/pt-br.json'
}

// Function to load the language file
const loadFile = async (language) => {
    const response = await fetch(pathsLanguage[language]);
    const data = await response.json();
    return data;
}


// Function to get the language from browser storage and update the content
const getLanguage = () => {
    try {
        const language = localStorage.getItem('language') || 'en';
        loadFile(language).then((data) => {
            // General Elements
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach((element) => {
                const key = element.getAttribute('data-i18n');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
            // Elements have alt 
            const alt_elements = document.querySelectorAll('[data-i18n-alt]');
            alt_elements.forEach((element) => {
                const key = element.getAttribute('data-i18n-alt');
                if (data[key]) {
                    element.alt = data[key];
                }
            })
        })
    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

// Function to change the lamguage and update the content
const setLanguage = async (language) => {
    try {
        if (language != null || language != "") {
            localStorage.setItem('language', language);
        } else {
            localStorage.setItem('language', "en");
        }
        getLanguage();
    } catch (error) {
        console.error('Error setting language:', error);
    }
}

// Available Globally
window.getLanguage = getLanguage();
getLanguage();