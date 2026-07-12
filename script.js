// ===============================
// TECHBOX ACADEMY
// script.js
// ===============================

// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Navbar background on scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,17,31,0.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,17,31,.70)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Active navigation link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Gallery Lightbox
// ===============================

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// ===============================
// Hero buttons animation
// ===============================

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// ===============================
// Floating course cards
// ===============================

document.querySelectorAll(".course-card").forEach((card, index) => {

    card.style.animation = `floatCard 5s ease-in-out ${index * 0.15}s infinite`;

});

// ===============================
// Add required CSS dynamically
// ===============================

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(40px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:#22d3ee !important;

}

#lightbox{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.92);

display:none;

justify-content:center;

align-items:center;

z-index:9999;

padding:40px;

}

#lightbox.active{

display:flex;

}

#lightbox img{

max-width:90%;

max-height:90%;

border-radius:18px;

box-shadow:0 0 40px rgba(0,0,0,.5);

}

@keyframes floatCard{

0%{

transform:translateY(0);

}

50%{

transform:translateY(-8px);

}

100%{

transform:translateY(0);

}

}

`;

document.head.appendChild(style);

console.log("TechBox Academy website loaded successfully.");
