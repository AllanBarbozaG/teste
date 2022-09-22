window.addEventListener('load', () => {
  setNumberOfNewsCards(); 

})





function setNumberOfNewsCards() {
  const teamContainerGrid = document.querySelector('#team-container-grid');

  const lorPlayers = teamsArr[0].players;

  lorPlayers.map((player, index) => {
    teamContainerGrid.innerHTML += `
      <div 
        id="player-card-div-id-${index}"
        class="player-card-div"
      >
        <div
          id="player-photo-div-id-${index}"
          class="player-photo-div"
        > 
          <img 
            src="/src/img/player-frame.png"
            id="frame-img-id-${index}"
            class="frame-img"  
          />

          <img
            src="/src/img//person.png"
            style="background-image: linear-gradient(to top left, rgb(0, 0, 255), rgb(16, 116, 231));"
            id="player-img-id-${index}"
            class="player-img"
          />

          <div
            id="player-infos-div-id-${index}"
            class="player-infos"
            >
              <h4 
                id="player-name-h4-id-${index}"
                class="player-name"
              > ${player.name} </h4>
           </div>
        </div>

      

      </div>
    
        
            
            
 

      

    `
  })
}


{/* 
 

 <p 
            id="player-card-title-${index}"
            class="player-link-title"
          >
            ${news.newsTitle}
          </p>

*/}

