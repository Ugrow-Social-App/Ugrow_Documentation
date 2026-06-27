// Enable or disable navbar when the burguer has been clicked
const navbar_active = () => {
    const navbar = document.querySelector("nav");
    if (navbar.classList.value == "active") {
        navbar.classList.value = "none";
    } else {
        navbar.classList.value = "active";
    }
}