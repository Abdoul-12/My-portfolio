const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("main section");
const panels = document.querySelectorAll(".panel");
const levels = document.querySelectorAll(".level span");

levels.forEach(function (bar) {
  bar.style.setProperty("--level-width", bar.style.width);
});

panels.forEach(function (panel) {
  panel.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

panels.forEach(function (panel) {
  revealObserver.observe(panel);
});

const menuObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const activeLink = document.querySelector('.menu a[href="#' + entry.target.id + '"]');

      menuLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, {
  rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(function (section) {
  menuObserver.observe(section);
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});
