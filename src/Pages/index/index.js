document.body.addEventListener('onload', () => {
  console.log('oi')
})





// function setNavbarHeight() {
//   const main = document.querySelector('#main');
//   const navbar = document.querySelector('.navbar-style');
//   const teste = document.querySelector('.teste');

//   main.addEventListener('mouseover', () => {
//     navbar.style.height = '7rem';   
//     navbar.style.opacity = '1'    
//   })

//   teste.addEventListener('mouseover' , () => {
//     navbar.style.height = '3rem';   
//     navbar.style.opacity = '0.8'
//   })  

//   navbar.addEventListener('mouseover', () => {
//     navbar.style.height = '7rem';   
//     navbar.style.opacity = '1';
//   })

//   navbar.addEventListener('mouseout', () => {
//     navbar.style.height = '3rem';   
//     navbar.style.opacity = '0.8';
//   })



//   // teste.addEventListener('mouseout', () => {    
//   //   navbar.style.height = '7rem';
//   // })
// }
// setNavbarHeight();

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