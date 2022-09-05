window.addEventListener('load', (e) => {
  console.log(e)
  setNavbarHeightAndOpacity()
})

document.addEventListener('click', (e) => {
  console.log(e)
})

function setNavbarHeightAndOpacity() {
  const navbar = document.querySelector('.navbar-style')
  const carouselDiv = document.querySelector('#carousel-div')
  const teste = document.querySelector('.teste')

  navbar.addEventListener('mouseover', () => {
    if (navbar.classList.contains('hideNavbar')) {
      navbar.classList.add('showNavbar')
      navbar.classList.remove('hideNavbar')
    }
  })

  carouselDiv.addEventListener('mouseover', () => {
    if (navbar.classList.contains('hideNavbar')) {
      navbar.classList.add('showNavbar')
      navbar.classList.remove('hideNavbar')
    }
  })

  teste.addEventListener('mouseover', () => {
    if (navbar.classList.contains('showNavbar')) {
      navbar.classList.add('hideNavbar');
      navbar.classList.remove('showNavbar')
    }
  })
}

