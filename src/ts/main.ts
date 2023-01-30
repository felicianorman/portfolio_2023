const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar--menu');

hamburger?.addEventListener("click", () => {
    console.log("Hej");
    hamburger.classList.add("active");
    navMenu?.classList.add("active");
})