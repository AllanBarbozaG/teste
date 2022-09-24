window.addEventListener('load', () => {
  setNumberOfPlayerCards();
})

function setNumberOfPlayerCards() {
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
            src=${player.photo}
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
              class="player-name-and-nick"
            > 
              ${player.name} 
              <br>
              <p>
               [${player.nick}], ${player.age} anos
              </p>
            </h4>

            <div                 
              class="player-info-element"
            >
              <img                   
                class="icon-img"
                src="/src/img/pointer.png"
                alt="#"
              />

              <p                  
                class="player-info"
              >
                ${player.location}
              </p>
            </div>

            <div                 
              class="player-info-element"
            >
              <img                   
                class="icon-img"
                src="/src/img/white-controls.png"
                alt="#"
              />

              <p                  
                class="player-info"
              >
                ${player.playStyle}
              </p>
            </div>

            <div                 
              class="player-info-element"
            >
              <img                   
                class="icon-img"
                src="/src/img/trophy.png"
                alt="#"
              />

              <p                  
                class="player-info"
              >
                ${player.championshipOne}
              </p>
            </div>

            <div                 
              class="player-info-element"
            >
              <img  
                style="
                  height: 1.5rem; 
                  position: relative; 
                  left: 0.2rem; 
                  top: 0.1rem
                "                 
                class="icon-img"
                src="/src/img/interrogation.png"
                alt="#"
              />

              <p  
                style="font-style: italic;"                               
                class="player-info player-curiosity"
              >
                "${player.curiosity}"
              </p>
            </div>              
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

