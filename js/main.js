// toggle mobile menus
const headerBars = document.querySelector(".header-bars");
const mobileMenus = document.querySelector(".mobile-menus");

const overlay = document.querySelector(".overlay");

headerBars.addEventListener("click", () => {
  headerBars.classList.toggle("bar-change");
  mobileMenus.classList.toggle("show");

  if (mobileMenus.classList.contains("show")) {
    overlay.classList.add("show");
  } else {
    overlay.classList.remove("show");
  }
});

overlay.addEventListener("click", () => {
  headerBars.classList.remove("bar-change");
  mobileMenus.classList.remove("show");
  overlay.classList.remove("show");
});

// Show/hide scrollTopBtn after scrolling 500px

const scrollTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Scroll top when scrollTopBtn is clicked
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Provides a polished user experience
  });
});

// Close/hide mobileMenu when menu link is clicked, the onClick event is added to the html
const closeMobileMenu = () => {
  overlay.classList.remove("show");
  mobileMenus.classList.remove("show");
  headerBars.classList.toggle("bar-change");
};

// Style navLinks on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    );
  });
});

const projects = [
  {
    id: 1,
    img: "images/calculator.png",
    alt: "calculator image",
    title: "Calculator App",
    stack: "HTML, CSS, JavaScript",
    liveLink: "https://rasheed197.github.io/calculator/",
    gitHubLink: "https://github.com/rasheed197/calculator",
  },

  {
    id: 2,
    img: "images/todo.png",
    alt: "todo image",
    title: "Todo App",
    stack: "HTML, CSS, JavaScript",
    liveLink: "https://rasheed197.github.io/todo/",
    gitHubLink: "https://github.com/rasheed197/todo",
  },

  {
    id: 3,
    img: "images/portfolio.png",
    alt: "portfolio image",
    title: "Portfolio",
    stack: "HTML, CSS, JavaScript",
    liveLink: "https://rasheed197.github.io/portfolio/",
    gitHubLink: "https://github.com/rasheed197/portfolio",
  },

  {
    id: 4,
    img: "images/flexbox.png",
    alt: "flexbox image",
    title: "CSS Flexbox",
    stack: "HTML, CSS",
    liveLink: "https://rasheed197.github.io/cssflexbox/",
    gitHubLink: "https://github.com/rasheed197/cssflexbox",
  },

  {
    id: 5,
    img: "images/testimonial.png",
    alt: "testimonial image",
    title: "Grid Testimonial",
    stack: "HTML, CSS",
    liveLink: "https://rasheed197.github.io/testimonial-grid/",
    gitHubLink: "https://github.com/rasheed197/testimonial-grid",
  },

  {
    id: 6,
    img: "images/chat.png",
    alt: "chat image",
    title: "Chat App",
    stack: "HTML, Bootstrap, JavaScript",
    liveLink: "https://rasheed197.github.io/web-chat-bootstrap/",
    gitHubLink: "https://github.com/rasheed197/web-chat-bootstrap",
  },
  {
    id: 7,
    img: "images/ishadeed.png",
    alt: "ishadeed image",
    title: "Ishadeed Store",
    stack: "HTML, CSS, Bootstrap",
    liveLink: "https://rasheed197.github.io/ishadeed-store/",
    gitHubLink: "https://github.com/rasheed197/ishadeed-store",
  },
];

// Add the projects to you HTML
const projectsContainer = document.querySelector(".swiper-wrapper");

projects.forEach((project) => {
  projectsContainer.insertAdjacentHTML(
    "beforeend", // add to bottom of container
    `
      <div class="swiper-slide">
        <div class="img-container">
          <img src=${project.img} alt=${project.alt} />
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="section-body project-stack">${project.stack}</p>
          <div class="project-buttons">
            <a href=${project.liveLink} target="_blank"><button class="button-1">Live Demo</button></a>
            <a href=${project.gitHubLink} target="_blank"><button class="button-2">GitHub</button></a>
          </div>
        </div>
      </div>
    `,
  );
});

  
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,

  // responsive breakpoints
  breakpoints: {
    470: {
      slidesPerView: 2,
    },
    690: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },

  // enable drag/swipe
  grabCursor: true,

  // optional navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
