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

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = (window.scrollY > 100) ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });