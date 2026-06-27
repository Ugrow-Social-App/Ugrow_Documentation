class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <!-- Informations across the tabs to shows the institutions and dedication -->
            <div class="footer_special_info">
                <div>
                    <figure>
                        <img src="./src/assets/images/logos/unicesumar_logo.svg">
                    </figure>
                    <figure>
                        <img src="./src/assets/images/logos/iceti_logo.svg">
                    </figure>
                </div>
                <small data-i18n="footer_special_info.logo_description"></small>
                <span data-i18n="footer_special_info.message"></span>
                <small data-i18n="footer_special_info.message_description"></small>
            </div>
            <!-- Tabs to acess other pages -->
            <ul class="footer_tabs">
                <li>
                    <h4 data-i18n="footer_tabs.documentation"></h4>
                    <ul>
                        <li><a href="/" data-i18n="footer_tabs.documentation.academic"></a></li>
                        <li><a href="/" data-i18n="footer_tabs.documentation.manual"></a></li>
                    </ul>
                </li>
                <li>
                    <h4 data-i18n="footer_tabs.help"></h4>
                    <ul>
                        <li><a href="/" data-i18n="footer_tabs.help.contact"></a></li>
                        <li><a href="/" data-i18n="footer_tabs.help.questions"></a></li>
                    </ul>
                </li>
                <li>
                    <h4 data-i18n="footer_tabs.app"></h4>
                    <ul>
                        <li><a href="/" data-i18n="footer_tabs.app.ugrow"></a></li>
                        <li><a href="/" data-i18n="footer_tabs.app.term"></a></li>
                    </ul>
                </li>
            </ul>
        </footer>
     `;
  }
}

customElements.define('footer-component', Footer);