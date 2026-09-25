const fadeElements = document.querySelectorAll(
  '.about, .projects, .resume, .contact, .project-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});