const language_select = document.getElementById("language-select");
const theme_select = document.getElementById("theme-select");
const common_sections = document.querySelectorAll("section.common_section");
const navbar = document.querySelector("nav");
const header = document.querySelector("header");

// Move an element to whithin another
const moveHtmlElements = (element, to_element) => {
    if (element && to_element) to_element.appendChild(element);
}

// Verify body size on HTML
const verify_body_size = () => {
    if (window.innerWidth <= 955) {
        // If the father element is Header, move elements to inside of navbar        
        if (language_select.parentElement.nodeName === "HEADER") {
            moveHtmlElements(language_select, navbar);
            moveHtmlElements(theme_select, navbar);
            common_sections.forEach((section) => {
                let elementToMove = section.lastElementChild;
                if (elementToMove && elementToMove.nodeName === "ARTICLE") {
                    elementToMove = elementToMove.previousElementSibling;
                }

                const targetArticle = section.querySelector("article");

                if (elementToMove && targetArticle) {
                    const lastChildOfArticle = targetArticle.lastElementChild;
                    targetArticle.insertBefore(elementToMove, lastChildOfArticle);
                }
            });
        }
        // But if the body width is bigger that 955px, so move to elements to inside of header
    } else if (window.innerWidth > 955 && language_select.parentElement.nodeName === "NAV") {
        moveHtmlElements(language_select, header);
        moveHtmlElements(theme_select, header);

        common_sections.forEach((section) => {
            const targetArticle = section.querySelector("article");
            
            if (targetArticle && targetArticle.children.length > 1) {
                const elementToMoveBack = targetArticle.lastElementChild.previousElementSibling;
                
                if (elementToMoveBack) {
                    section.appendChild(elementToMoveBack);
                }
            }
        });
    }
}

// Verify once
verify_body_size();
// Everytime when the window resizes, verify body size
window.addEventListener("resize", verify_body_size);
