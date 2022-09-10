window.addEventListener('load', () => {
  setNumberOfNewsCards()
})

function setNumberOfNewsCards() {
  const newsContainerGrid = document.querySelector('#news-container-grid');

  // o array abaixo vai definir quantos cards irão surgir, a partir do link da notícia.
  const newsArr = [
    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 1'
    },

    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 2'
    },

    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 3'
    },

    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 4'
    },

    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 5'
    },

    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 6'
    },

    {
      newsLink: '/index.html',
      title: 'Hydra Gaming vence o sazonal 7'
    }
  ];

  newsArr.map((news, index) => {
    newsContainerGrid.innerHTML += `
      <a 
        class="news-card-link"
        href=${news.newsLink}
      >  
        <div 
          id="news-card-id-${index}"
          class="news-card"
        >
          <p style="color: white; margin-bottom: 0">
            Card ${index}
          </p>

          <div 
            id="news-card-img-div-${index}"
            class="news-card-img"
          ></div>

          <div 
            id="card-type-div-${index}"
            class="card-type-div"
          >
            NOTÍCIAS
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

