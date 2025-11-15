fetch('navbar.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
});

fetch('footer.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
});

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });