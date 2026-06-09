// ==========================
// NAVBAR SCROLL
// ==========================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ==========================
// ANIMACIONES AL SCROLL
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    const elements = document.querySelectorAll(
        ".card, .career-card, .life-card, .news-card, .about .left, .about .right"
    );

    elements.forEach(el => {

        observer.observe(el);

    });

});

// ==========================
// SCROLL SUAVE MENU
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});