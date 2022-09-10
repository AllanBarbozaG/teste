function setNumberOfNewsCards() {
  const newsContainerGrid = document.querySelector('#news-container-grid');

  // o array abaixo vai definir quantos cards irão surgir.
  const newsLinksArr = ['/index.html', '/src/Pages/news/news.html', 'a', 'b', 'c', 'd', 'e'];

  newsLinksArr.map((newsLink, index) => {
    return newsContainerGrid.innerHTML += `
      <a 
        class="news-card-link"
        href=${newsLink}
      >  
        <div 
          id="news-card-id-${index}"
          class="news-card"
        >
          <p style="color: white; margin-bottom: 0">Card ${index}</p>
          <div 
            id="news-card-img-div-${index}"
            class="news-card-img"
          ></div>
        </div>
      </a>  
    `

  })


  
}

setNumberOfNewsCards()