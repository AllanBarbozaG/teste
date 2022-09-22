
window.addEventListener("DOMContentLoaded", () => {  
  setRemoveLoader();
})

function setRemoveLoader() {
  const body = document.querySelector('body')
  const loader = document.querySelector('#loader')

  setTimeout(() => {
    console.log('timeout')
    body.removeChild(loader)
  }, 1000);
}

// DEFINE A POSIÇÃO DO BOTÃO DE REDES SOCIAIS. RELACIONADO À NAVBAR/MENU DE CELULAR AO CARREGAR A PÁGINA
window.addEventListener('load', (e) => {
  const containerFluid = document.querySelector('#container-fluid');
  const navbarNav = document.querySelector('.navbar-nav');
  const linksBox = document.querySelector('#links-box');

  if (window.outerWidth < 995 && linksBox.classList.contains('links-box')) {
    linksBox.classList.remove('links-box');
    linksBox.classList.add('links-box-from-inside-button');
    containerFluid.removeChild(linksBox);
    navbarNav.appendChild(linksBox);
  } else if (window.innerWidth >= 995 && linksBox.classList.contains('links-box-from-inside-button')) {
    linksBox.classList.remove('links-box-from-inside-button');
    linksBox.classList.add('links-box');
    navbarNav.removeChild(linksBox);
    containerFluid.appendChild(linksBox);
  }
})

// DEFINE A POSIÇÃO DO BOTÃO DE REDES SOCIAIS. RELACIONADO À NAVBAR/MENU DE CELULAR AO REDIMENSIONAR A PÁGINA
window.addEventListener('resize', (e) => {
  const containerFluid = document.querySelector('#container-fluid');
  const navbarNav = document.querySelector('.navbar-nav');
  const linksBox = document.querySelector('#links-box');

  if (window.innerWidth < 995 && linksBox.classList.contains('links-box')) {
    linksBox.classList.remove('links-box');
    linksBox.classList.add('links-box-from-inside-button');
    containerFluid.removeChild(linksBox);
    navbarNav.appendChild(linksBox);
  } else if (window.innerWidth >= 995 && linksBox.classList.contains('links-box-from-inside-button')) {
    linksBox.classList.remove('links-box-from-inside-button');
    linksBox.classList.add('links-box');
    navbarNav.removeChild(linksBox);
    containerFluid.appendChild(linksBox);
  }
})


