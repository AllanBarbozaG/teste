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
  const teste = document.querySelector('#hydra-slogan-div')

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

function displayHydraSloganElements() {
  const hydraSloganDiv = document.querySelector('#hydra-slogan-div');
  const hydraSloganH2 = document.querySelector('.hydra-slogan-h2');
  const secondHydraSloganH2 = document.querySelector('.second-hydra-slogan-h2')

  hydraSloganDiv.addEventListener('mouseover', () => {
    if (hydraSloganH2.classList.contains('hideSloganText') && secondHydraSloganH2.classList.contains('hideSloganText')) {
      hydraSloganH2.classList.add('animateText')
      secondHydraSloganH2.classList.add('animateText')
    }

  })


}

displayHydraSloganElements()
