// o array abaixo define quantos cards irão surgir na página de notícias, a partir do link, do título e da imagem da notícia.
const newsArr = [
  {
    newsLink: '/src/Pages/newsTemplate/newTemplate.html',
    newsTitle: 'Hydra Gaming vence o sazonal 1',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    newsTitle: 'Hydra Gaming vence o sazonal 2',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    newsTitle: 'Hydra Gaming vence o sazonal 3',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    newsTitle: 'Hydra Gaming vence o sazonal 4',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    newsTitle: 'Hydra Gaming vence o sazonal 5',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    newsTitle: 'Hydra Gaming vence o sazonal 6',
    newsImg: '/src/img/HDR4LW.jpeg'
  },

  {
    newsLink: '/index.html',
    newsTitle: 'Hydra Gaming vence o sazonal 7',
    newsImg: '/src/img/HDR4LW.jpeg'
  }
];

// o array abaixo define quantos cards irão surgir na página de guias, a partir do link, do título e da imagem do guia.
const guidesArr = [
  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

  {
    guideLink: '/index.html',
    guideTitle: 'Guia teste',
    guideImg: '/src/img/Emoetional.jpg'
  },

];

const teamsArr = [
  legendsOfRuneterra = {
    players: [
      {
        photo: '/src/img/person.jpg',
        name: 'Nome do Jogador',
        nick: 'player 1',
        age: '30',
        playStyle: 'ofensivo',
        championshipOne: '1o lugar no campeonato 1',
        championshipTwo: '1o lugar no campeonato 2',
        location: 'local 1',
        curiosity: 'curiosidade 1'
      },

      {
        photo: '/src/img/person.jpg',
        name: 'Nome do Jogador',
        nick: 'player 1',
        age: '30',
        playStyle: 'ofensivo',
        championshipOne: '1o lugar no campeonato 1',
        championshipTwo: '1o lugar no campeonato 2',
        location: 'local 1',
        curiosity: 'curiosidade 1'
      },

      {
        photo: '/src/img/person.jpg',
        name: 'Nome do Jogador',
        nick: 'player 1',
        age: '30',
        playStyle: 'ofensivo',
        championshipOne: '1o lugar no campeonato 1',
        championshipTwo: '1o lugar no campeonato 2',
        location: 'local 1',
        curiosity: 'curiosidade 1'
      },

      {
        photo: '/src/img/person.jpg',
        name: 'Nome do Jogador',
        nick: 'player 1',
        age: '30',
        playStyle: 'ofensivo',
        championshipOne: '1o lugar no campeonato 1',
        championshipTwo: '1o lugar no campeonato 2',
        location: 'local 1',
        curiosity: 'curiosidade 1'
      },

    ]
  }
]

const LORplayer = teamsArr[0].players;
LORplayer.map((player) => {
  console.log(player)
})