class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- Navbar -->
        <nav data-cy="navbar">
            <h3 data-i18n="navbar.navbar_title"></h3>
            <ul class="navbar_tabs">
                <li class="navbar_tabs_sections">
                    <h4 data-i18n="navbar.navbar_tabs.app"></h4>
                    <ul>
                        <li>
                            <a href="./downloads.html" data-i18n="navbar.navbar_tabs.app.download"></a>
                        </li>
                    </ul>
                </li>
                <li class="navbar_tabs_sections">
                    <h4 data-i18n="navbar.navbar_tabs.documents"></h4>
                    <ul>
                        <li>
                            <a href="./documentation.html" data-i18n="navbar.navbar_tabs.documents.manual"></a>
                            <a href="./documentation.html" data-i18n="navbar.navbar_tabs.documents.github"></a>
                            <a href="./documentation.html" data-i18n="navbar.navbar_tabs.documents.academic"></a>
                        </li>
                    </ul>
                </li>
                <li class="navbar_tabs_sections">
                    <h4 data-i18n="navbar.navbar_tabs.help"></h4>
                    <ul>
                        <li>
                            <a href="./contact.html" data-i18n="navbar.navbar_tabs.help.contact"></a>
                            <a href="./contact.html" data-i18n="navbar.navbar_tabs.help.questions"></a>
                        </li>
                    </ul>
                </li>
                <li class="navbar_tabs_sections">
                    <h4 data-i18n="navbar.navbar_tabs.about"></h4>
                    <ul>
                        <li>
                            <a href="./about.html" data-i18n="navbar.navbar_tabs.about.app"></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <figure>
                <img src="./src/assets/images/logos/monochrome_logo.svg" data-i18n-alt="navbar.monochrome_logo">
                <figcaption data-i18n="navbar.navbar_figure_caption"></figcaption>
            </figure>
        </nav>
     `;
  }
}

customElements.define('navbar-component', Navbar);