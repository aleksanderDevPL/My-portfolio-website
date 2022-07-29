const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

if ( navigator.platform.indexOf('Win') != -1 ) {
    window.document.getElementById("wrapper").setAttribute("class", "windows");
  } else if ( navigator.platform.indexOf('Mac') != -1 ) {
    window.document.getElementById("wrapper").setAttribute("class", "mac");
  }