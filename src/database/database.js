// o array abaixo define quantos cards irão surgir na página de notícias, a partir do link, do título e da imagem da notícia.
const newsArr = [
  {
    newsLink: '/src/Pages/newsTemplate/newTemplate.html',
    title: 'Hydra Gaming vence o sazonal 1',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    title: 'Hydra Gaming vence o sazonal 2',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    title: 'Hydra Gaming vence o sazonal 3',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    title: 'Hydra Gaming vence o sazonal 4',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    title: 'Hydra Gaming vence o sazonal 5',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    title: 'Hydra Gaming vence o sazonal 6',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    title: 'Hydra Gaming vence o sazonal 7',
    newsImg: '/src/img/HDR4LW.jpeg'
  }
];

const guidesArr = [
  {
    guideLink: 'a',
    guideTitle: 'a',
    guideImg: 'a'

  }
];

const teamsArr = [
  legendsOfRuneterra = {
    players: [
      {
        playerNick: 'player1',
        playerLocation: 'local1',
        playerMoreInfos: 'moreInfos1'
      },

      {
        playerNick: 'player2',
        playerLocation: 'local2',
        playerMoreInfos: 'moreInfos2'
      },

      {
        playerNick: 'player3',
        playerLocation: 'local3',
        playerMoreInfos: 'moreInfos3'
      }
    ]
  }
]

const LORplayer = teamsArr[0].players;
LORplayer.map((player) => {
  console.log(player)
})