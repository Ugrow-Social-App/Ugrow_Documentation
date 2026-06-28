// Images Path
const pathHero = "./src/assets/images/hero/"
const images = {
    1: "img-1.svg",
    2: "img-2.svg",
    3: "img-3.svg",
    4: "img-4.svg",
    5: "img-5.svg",
    6: "img-6.svg",
}

// Hero element (section)
const hero = document.getElementsByClassName("hero")[0];

// Select a random image
const selectARandonImage = () => {
    // Generate a random number based on the range of images keys
    const image = Math.floor(Math.random() * (Object.keys(images).length) + 1)
    // Apply image like background of hero
    hero.style.backgroundImage = `linear-gradient(rgba(28, 28, 28, 0.38)), url(${pathHero + images[image]})`;
}

selectARandonImage()