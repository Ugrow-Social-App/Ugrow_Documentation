// Available languages and their file paths
const pathsLanguage = {
  'en': './src/i18n/en.json',
  'pt-br': './src/i18n/pt-br.json'
};

// Function to load the language file
const loadFile = async (language) => {
  try {
    const response = await fetch(pathsLanguage[language] || pathsLanguage['en']);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading language file:', error);
    return {};
  }
};

// Function to get the language from browser storage
const getLanguage = () => {
  return localStorage.getItem('language') || 'en';
};

// Function to update the content
const putLanguage = async () => {
  try {
    const data = await loadFile(getLanguage());
    
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
    });
  } catch (error) {
    console.error('Error updating content:', error);
  }
};

// Function to change the language and update the content
const setLanguage = async (language) => {
  try {
    if (language) {
      localStorage.setItem('language', language);
    } else {
      localStorage.setItem('language', 'en');
    }
    await putLanguage(); // Wait for translations to apply
  } catch (error) {
    console.error('Error setting language:', error);
  }
};

// Available Globally (Make functions accessible, but don't call them as a Promise)
window.getLanguage = getLanguage;
window.loadFile = loadFile;
window.putLanguage = putLanguage;
window.setLanguage = setLanguage;

// Initial load when script executes
document.addEventListener('DOMContentLoaded', () => {
  putLanguage();
});