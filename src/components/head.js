class Head extends HTMLElement {
    connectedCallback() {
        // Apply extra content from the page
        const extraContent = this.innerHTML;

        this.innerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="./public/favicon/favicon.svg" type="image/svg+xml">
            
            <!-- Google Fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            
            <!-- CSS -->
            <link rel="stylesheet" href="./src/css/root.css">
            <link rel="stylesheet" href="./src/css/style.css">
            
            <!-- Inser the extra contents -->
            ${extraContent}
        `;

        // Save the extra elements here
        const nodes = Array.from(this.childNodes);
        nodes.forEach(node => document.head.appendChild(node));
        // Remove head-component from HTML
        this.remove();
    }
}

customElements.define('head-component', Head);
