if (window.innerWidth >= 1025) {
  window.addEventListener('load', (e) => {
    console.log(e)
    setNavbarHeightAndOpacity();
    setDisplayHydraSloganAndImgElements();
    setDisplayHydraDescription();
  })

  function setNavbarHeightAndOpacity() {
    const navbar = document.querySelector('.navbar-style');
    const carouselDiv = document.querySelector('#carousel-div');
    const hydraSloganDiv = document.querySelector('#hydra-slogan-div');
    const hydraDescriptionLogoDiv = document.querySelector('#hydra-description-logo-div');

    navbar.addEventListener('mouseover', () => {
      if (navbar.classList.contains('hideNavbar')) {
        navbar.classList.add('showNavbar');
        navbar.classList.remove('hideNavbar');
      }
    })

    carouselDiv.addEventListener('mouseover', () => {
      if (navbar.classList.contains('showNavbar')) {
        navbar.classList.add('hideNavbar');
        navbar.classList.remove('showNavbar');
      }
    })

    hydraSloganDiv.addEventListener('mouseover', () => {
      if (navbar.classList.contains('hideNavbar')) {
        navbar.classList.add('showNavbar');
        navbar.classList.remove('hideNavbar');
      }
    })

    hydraDescriptionLogoDiv.addEventListener('mouseover', () => {
      if (navbar.classList.contains('showNavbar')) {
        navbar.classList.add('hideNavbar');
        navbar.classList.remove('showNavbar');
      }
    })
  }

  function setDisplayHydraSloganAndImgElements() {
    const hydraSloganDiv = document.querySelector('#hydra-slogan-div');
    const hydraSloganH2 = document.querySelector('.hydra-slogan-h2');
    const secondHydraSloganH2 = document.querySelector('.second-hydra-slogan-h2');
    const charactersImg = document.querySelector('#characters-img');

    hydraSloganDiv.addEventListener('mouseover', () => {
      if (hydraSloganH2.classList.contains('hideSloganText') && secondHydraSloganH2.classList.contains('hideSloganText') && charactersImg.classList.contains('hideCharactersImg')) {
        hydraSloganH2.classList.add('animateText');
        secondHydraSloganH2.classList.add('animateText');
        charactersImg.classList.add('animateCharactersImg');
      }
    })
  }

  function setDisplayHydraDescription() {
    const hydraDescriptionLogoDiv = document.querySelector('#hydra-description-logo-div');
    const aboutUsH1PFirst = document.querySelector('#about-us-h1-p-first');
    const aboutUsH1PSecond = document.querySelector('#about-us-h1-p-second');

    hydraDescriptionLogoDiv.addEventListener('mouseover', (e) => {

      if (aboutUsH1PFirst.classList.contains('hideDescriptionText')) {
        aboutUsH1PFirst.classList.remove('hideDescriptionText');
        aboutUsH1PFirst.classList.add('showDescriptionText');
      }
    })

    aboutUsH1PFirst.addEventListener('animationend', (e) => {
      console.log(e)
      if (aboutUsH1PSecond.classList.contains('hideDescriptionText')) {
        aboutUsH1PSecond.classList.add('showDescriptionText');
        aboutUsH1PSecond.classList.remove('hideDescriptionText');
      }
    })
  }
} else if (window.innerWidth < 1025) {
  window.addEventListener('load', (e) => {
    console.log(e)
    setDisplayHydraSloganAndImgElements();
  })

  setDisplayHydraDescription();

  function setDisplayHydraSloganAndImgElements() {
    const hydraSloganH2 = document.querySelector('.hydra-slogan-h2');
    const secondHydraSloganH2 = document.querySelector('.second-hydra-slogan-h2');
    const charactersImg = document.querySelector('#characters-img');

    if (hydraSloganH2.classList.contains('hideSloganText') && secondHydraSloganH2.classList.contains('hideSloganText') && charactersImg.classList.contains('hideCharactersImg')) {
      hydraSloganH2.classList.add('animateText');
      secondHydraSloganH2.classList.add('animateText');
      charactersImg.classList.add('animateCharactersImg');
    }
  }

  function setDisplayHydraDescription() {
    const hydraDescriptionLogoDiv = document.querySelector('#hydra-description-logo-div');
    const aboutUsH1PFirst = document.querySelector('#about-us-h1-p-first');
    const aboutUsH1PSecond = document.querySelector('#about-us-h1-p-second');

    hydraDescriptionLogoDiv.addEventListener('touchstart', (e) => {
      if (aboutUsH1PFirst.classList.contains('hideDescriptionText')) {
        aboutUsH1PFirst.classList.remove('hideDescriptionText');
        aboutUsH1PFirst.classList.add('showDescriptionText');
      }
    })

    aboutUsH1PFirst.addEventListener('animationstart', (e) => {
      console.log(e)
      if (aboutUsH1PSecond.classList.contains('hideDescriptionText')) {
        aboutUsH1PSecond.classList.remove('hideDescriptionText');
        aboutUsH1PSecond.classList.add('showDescriptionText');
      }
    })    
  }
}

window.addEventListener('resize', (e) => {
  const containerFluid = document.querySelector('#container-fluid');
  const navbarNav = document.querySelector('.navbar-nav');
  const linksBox = document.querySelector('#links-box');

  if (window.innerWidth < 995) {
    if (linksBox.classList.contains('links-box')) {
      linksBox.classList.remove('links-box');
      linksBox.classList.add('links-box-from-inside-button');
      containerFluid.removeChild(linksBox);
      navbarNav.appendChild(linksBox);
    }
  } else {
    if(linksBox.classList.contains('links-box-from-inside-button')) {
      linksBox.classList.remove('links-box-from-inside-button');
      linksBox.classList.add('links-box');
      navbarNav.removeChild(linksBox);
      containerFluid.appendChild(linksBox);

    }
  }
})

window.addEventListener('load', (e) => {
  const containerFluid = document.querySelector('#container-fluid');
  const navbarNav = document.querySelector('.navbar-nav');
  const linksBox = document.querySelector('#links-box');

  if (window.innerWidth < 995) {
    if (linksBox.classList.contains('links-box')) {
      linksBox.classList.remove('links-box');
      linksBox.classList.add('links-box-from-inside-button');
      containerFluid.removeChild(linksBox);
      navbarNav.appendChild(linksBox);
    }
  } else {
    if(linksBox.classList.contains('links-box-from-inside-button')) {
      linksBox.classList.remove('links-box-from-inside-button');
      linksBox.classList.add('links-box');
      navbarNav.removeChild(linksBox);
      containerFluid.appendChild(linksBox);
    }
  }
})


