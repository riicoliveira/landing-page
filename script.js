document.addEventListener("DOMContentLoaded", () => {
    // Código 1: Efeito de Login e Registro
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

    // Código 2: Menu Mobile e Scroll Reveal
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (menuBtn && navLinks) {
        const menuBtnIcon = menuBtn.querySelector("i");

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");

            const isOpen = navLinks.classList.contains("open");
            menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
        });

        navLinks.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtnIcon.setAttribute("class", "ri-menu-line");
        });
    }

    // Verifica se ScrollReveal está disponível antes de chamar
    if (typeof ScrollReveal !== "undefined") {
        const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
        };

        ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
        ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 500 });
        ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 1000 });
        ScrollReveal().reveal(".header__content form", { ...scrollRevealOption, delay: 1500 });
        ScrollReveal().reveal(".header__content .bar", { ...scrollRevealOption, delay: 2000 });
        ScrollReveal().reveal(".header__image__card", {
            duration: 1000,
            interval: 500,
            delay: 500,
        });
    } else {
        console.warn("ScrollReveal não está carregado.");
    }
});
