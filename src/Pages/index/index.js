window.addEventListener('load', (e) => {
  console.log(e)
  setNavbarHeightAndOpacity();
})

document.addEventListener('click', (e) => {
  console.log(e)
})

function setNavbarHeightAndOpacity() {
  const navbar = document.querySelector('.navbar-style');
  const carouselDiv = document.querySelector('#carousel-div');
  const hydraSloganDiv = document.querySelector('#hydra-slogan-div');

  navbar.addEventListener('mouseover', () => {
    if (navbar.classList.contains('hideNavbar')) {
      navbar.classList.add('showNavbar');
      navbar.classList.remove('hideNavbar');
    }
  })

  carouselDiv.addEventListener('mouseover', () => {
    if (navbar.classList.contains('hideNavbar')) {
      navbar.classList.add('showNavbar');
      navbar.classList.remove('hideNavbar');
    }
  })

  hydraSloganDiv.addEventListener('mouseover', () => {
    if (navbar.classList.contains('showNavbar')) {
      navbar.classList.add('hideNavbar');
      navbar.classList.remove('showNavbar');
    }
  })
}

function displayHydraSloganAndImgElements() {
  const hydraSloganDiv = document.querySelector('#hydra-slogan-div');
  const hydraSloganH2 = document.querySelector('.hydra-slogan-h2');
  const secondHydraSloganH2 = document.querySelector('.second-hydra-slogan-h2');
  const charactersImg = document.querySelector('#characters-img');
  const carouselDiv = document.querySelector('#carousel-div');

  hydraSloganDiv.addEventListener('mouseover', () => {
    if (hydraSloganH2.classList.contains('hideSloganText') && secondHydraSloganH2.classList.contains('hideSloganText') && charactersImg.classList.contains('hideCharactersImg')) {
      hydraSloganH2.classList.add('animateText');
      secondHydraSloganH2.classList.add('animateText');
      charactersImg.classList.add('animateCharactersImg');
    }
  })

  // carouselDiv.addEventListener('mouseover', () => {
  //   if (hydraSloganH2.classList.contains('animateText')) {
  //     hydraSloganH2.classList.remove('animateText')
  //     hydraSloganH2.classList.add('hideSloganText')
  //     secondHydraSloganH2.classList.remove('animateText');
  //     secondHydraSloganH2.classList.add('hideSloganText');
  //     charactersImg.classList.remove('animateCharactersImg');
  //     charactersImg.classList.add('hideCharactersImg');
  //   }
  // })

  
}

displayHydraSloganAndImgElements();
