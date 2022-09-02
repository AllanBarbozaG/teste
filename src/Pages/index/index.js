const teste = document.querySelector('.teste')

document.addEventListener('onload', (teste, () => {
  console.log('oi')
}))

document.addEventListener('DOMContentLoaded', (e) => {
  setNavbarHeightAndOpacity()

})

document.addEventListener('click', (e) => {
  console.log(e)
})

function setNavbarHeightAndOpacity() {
  const navbar = document.querySelector('.navbar-style')
  const main = document.querySelector('#main')
  const teste = document.querySelector('.teste')

  navbar.addEventListener('mouseover', () => {
    if (navbar.classList.contains('hide')) {
      navbar.classList.add('show')
      navbar.classList.remove('hide')
    }
  })

  main.addEventListener('mouseover', () => {
    if (navbar.classList.contains('hide')) {
      navbar.classList.add('show')
      navbar.classList.remove('hide')
    }
  })

  teste.addEventListener('mouseover', () => {
    if (navbar.classList.contains('show')) {
      navbar.classList.add('hide');
      navbar.classList.remove('show')
    }
  })
}

