window.addEventListener('load', () => {
  setNumberOfNewsCards()
})

function setNumberOfNewsCards() {
  const newsContainerGrid = document.querySelector('#news-container-grid');

  newsArr.map((news, index) => {
    newsContainerGrid.innerHTML += `
      <a 
        id="news-card-link-id-${index}"
        class="news-card-link"
        href=${news.newsLink}
        name=${index}
      >  
        <div          
          id="news-card-id-${index}"
          class="news-card "
        >
          <img 
            src="/src/img/medalha.png" 
            alt="medalha" 
            id="medal-img-id-${index}"
            class="medal-img" 
          />

          <div 
            id="news-card-img-div-${index}"
            class="news-card-img"            
            style="background-image: url(${news.newsImg})"
          ></div>

          <div 
            id="card-type-div-${index}"
            class="card-type-div"
          >
            <p>
              NOTÍCIAS
            </p>
          </div>

          <p 
            id="news-card-title-${index}"
            class="news-link-title"
          >
            ${news.title}
          </p>
        </div>
      </a>  
    `
  })
}





