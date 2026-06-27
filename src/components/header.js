class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <!-- Logo -->
            <a class="logo" href="/">
                <img src="./src/assets/images/logos/logo.svg" alt="Ugrow Logo">
            </a>
            <!-- Input to search informations -->
            <form class="input-container">
                <button type="submit">
                    <img src="./src/assets/icons/search_icon.svg" alt="Search Icon">
                </button>
                <input id="search-input" type="text" placeholder="Search" autoComplete="on">
            </form>
            <!-- Select to change the theme -->
            <select id="theme-select" onchange="setTheme(this.value)">
                <option value="" data-i18n="header.theme-select.info" hidden>
                </option>
                <option value="light" data-i18n="header.theme-select.light"></option>
                <option value="dark" data-i18n="header.theme-select.dark"></option>
                <option value="system" data-i18n="header.theme-select.system"></option>
            </select>
            <!-- Select to change the language -->
            <select id="language-select" onchange="setLanguage(this.value)">
                <option value="" data-i18n="header.language-select.info" hidden>
                </option>
                <option value="en" data-i18n="header.language-select.en"></option>
                <option value="pt-br" data-i18n="header.language-select.pt-br"></option>
            </select>
            <!-- Acess to navbar -->
            <button id="burguer_menu" class="burguer_menu" onclick="navbar_active()">
                <img src="./src/assets/icons/icon_menu.svg">
            </button>
            <!-- Navbar Component -->
            <navbar-component></navbar-component>
        </header>
     `;
  }
}

customElements.define('header-component', Header);