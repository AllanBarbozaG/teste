function setNumberOfNewsCards() {
  // o array abaixo vai definir quantos cards irão surgir.
  const newsLinksArr = ['/index.html', '/src/Pages/news/news.html', 'a', 'b', 'c', 'd', 'e']

  const newsContainerGrid = document.querySelector('#news-container-grid')

  for (let i = 0; i < newsLinksArr.length; i++) {
    newsContainerGrid.innerHTML += `
      <a 
        class="news-card-link"
        href=${newsLinksArr[i]}
      >  
        <div 
          id="news-card-id-${i}"
          class="news-card"
        >
          <p style="color: white; margin-bottom: 0">Card ${i}</p>
          <div 
            id="news-card-img-div-${i}"
            class="news-card-img"
          ></div>
          

        </div>
      </a>  
    `
  }

  newsContainerGrid.appendChild(div1)
}

setNumberOfNewsCards()