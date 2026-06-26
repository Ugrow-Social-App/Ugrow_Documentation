// Enable or disable navbar when the burguer has been clicked
const navbar_active = () => {
    const navbar = document.querySelector("nav");
    if (navbar.classList.value == "active") {
        navbar.classList.value = "none";
        console.log("Hello")
    } else {
        navbar.classList.value = "active";
        console.log(navbar)
    }
}