window.addEventListener('load', () => {
  setNumberOfGuideCards()
})

function setNumberOfGuideCards() {
  const guidesContainerGrid = document.querySelector('#guides-container-grid');

  guidesArr.map((guide, index) => {
    guidesContainerGrid.innerHTML += `
      <a 
        id="guide-card-link-id-${index}"
        class="guide-card-link"
        href=${guide.guideLink}
        name=${index}
      >  
        <div          
          id="guide-card-id-${index}"
          class="guide-card "
        >
          <img 
            src="/src/img/medalha.png" 
            alt="medalha" 
            id="medal-img-id-${index}"
            class="medal-img" 
          />

          <div 
            id="guide-card-img-div-${index}"
            class="guide-card-img"            
            style="background-image: url(${guide.guideImg})"
          ></div>

          <div 
            id="card-type-div-${index}"
            class="card-type-div"
          >
            <p>
              GUIAS
            </p>
          </div>

          <p 
            id="guide-card-title-${index}"
            class="guide-link-title"
          >
            ${guide.guideTitle}
          </p>
        </div>
      </a>  
    `
  })
}