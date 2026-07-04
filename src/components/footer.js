class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer data-cy="footer">
            <!-- Informations across the tabs to shows the institutions and dedication -->
            <div class="footer_special_info">
                <div>
                    <figure>
                        <a href="https://www.unicesumar.edu.br/">
                            <img src="./src/assets/images/logos/unicesumar_logo.svg" data-i18n-alt="footer.footer_special_info.logo_unicesumar" target="_blank" rel="noopener noreferrer">
                        </a>
                    </figure>
                    <figure>
                        <a href="https://www.linkedin.com/company/iceti-instituto-cesumar-de-ci%C3%AAncia-tecnologia-e-inova%C3%A7%C3%A3o/" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/images/logos/iceti_logo.svg">
                        </a>
                    </figure>
                </div>
                <small data-i18n="footer.footer_special_info.logo_description"></small>
                <span data-i18n="footer.footer_special_info.message"></span>
                <small data-i18n="footer.footer_special_info.message_description"></small>
            </div>
            <!-- Tabs to acess other pages -->
            <ul class="footer_tabs">
                <li>
                    <h4 data-i18n="footer.footer_tabs.documentation"></h4>
                    <ul>
                        <li><a href="./documentation.html" data-i18n="footer.footer_tabs.documentation.academic"></a></li>
                        <li><a href="./documentation.html" data-i18n="footer.footer_tabs.documentation.manual"></a></li>
                    </ul>
                </li>
                <li>
                    <h4 data-i18n="footer.footer_tabs.help"></h4>
                    <ul>
                        <li><a href="" data-i18n="footer.footer_tabs.help.contact"></a></li>
                        <li><a href="" data-i18n="footer.footer_tabs.help.questions"></a></li>
                    </ul>
                </li>
                <li>
                    <h4 data-i18n="footer.footer_tabs.app"></h4>
                    <ul>
                        <li><a href="./about.html" data-i18n="footer.footer_tabs.app.ugrow"></a></li>
                        <li><a href="./about.html" data-i18n="footer.footer_tabs.app.license"></a></li>
                    </ul>
                </li>
            </ul>
        </footer>
     `;
  }
}

customElements.define('footer-component', Footer);