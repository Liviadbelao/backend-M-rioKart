import { v4 as uuidv4 } from "uuid";

const mapas = [
  //Copa Cogumelo
  {
    id: uuidv4(),
    nome: 'Mario Kart Stadium',
    imagem: '/mapasfotos/mariokartstadium.webp',
    descricao: 'Uma pista brilhante e animada com pistas de dança, luzes estroboscópicas e batidas de música que impulsionam os jogadores.',
    inspiracao: 'Sem uma inspiração geográfica específica.',
    copa: 'Copa Cogumelo',
    trofeus: 500,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Water Park',
    imagem: '/mapasfotos/waterpark.jpg',
    descricao: 'A pista "Water Park" (Parque Aquático) no Mario Kart 8 apresenta um ambiente colorido de parque aquático, com tobogãs, áreas de piscina e desafios relacionados à água, proporcionando uma experiência de corrida divertida e dinâmica.',
    inspiracao: 'Parques aquáticos da vida real.',
    copa: 'Copa Cogumelo',
    trofeus: 500,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Sweet Sweet Canyon',
    imagem: '/mapasfotos/sweetsweetcanyon.webp',
    descricao: 'Sweet Sweet Canyon é uma pista no jogo Mario Kart 8, conhecida por sua temática doce, com pistas feitas de chocolate, pirulitos gigantes e outros elementos de confeitaria.',
    inspiracao: 'Ambiente temático de doces e confeitaria',
    copa: 'Copa Cogumelo',
    trofeus: 500,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Thwomp Ruin',
    imagem: '/mapasfotos/thwompruin.webp',
    descricao: 'Os corredores enfrentam desafios ao navegar por entre essas estruturas em ruínas, proporcionando uma corrida emocionante e repleta de obstáculos dinâmicos.',
    inspiracao: 'Paisagem de ruínas antigas.',
    copa: 'Copa Cogumelo',
    trofeus: 500,
    plataforma: 'Nintendo Switch'
  },

  //Copa Flor
  {
    id: uuidv4(),
    nome: 'Mario Circuit',
    imagem: '/mapasfotos/mariocircuit.webp',
    descricao: 'Uma pista simples com curvas suaves, item boxes e alguns obstáculos.',
    inspiracao: 'Inspirado no universo geral de Super Mario.',
    copa: 'Copa Flor',
    trofeus: 600,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Toad Harbor',
    imagem: '/mapasfotos/toadharbor.webp',
    descricao: 'Um desfiladeiro colorido com curvas acentuadas, elevações e até uma seção subaquática.',
    inspiracao: 'Sem uma inspiração geográfica específica, mas possui elementos típicos dos jogos do Mario.',
    copa: 'Copa Flor',
    trofeus: 600,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Twisted Mansion',
    imagem: '/mapasfotos/twistedmansion.webp',
    descricao: 'A pista apresenta elementos temáticos de fantasma, como Boos e retratos assombrados, adicionando um toque de suspense à experiência de corrida.',
    inspiracao: 'Mansão assombrada.',
    copa: 'Copa Flor',
    trofeus: 600,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Shy Guy Falls',
    imagem: '/mapasfotos/shyguyfalls.webp',
    descricao: 'A pista apresenta uma paisagem deslumbrante com quedas dágua, trilhos suspensos e rampas emocionantes.',
    inspiracao: 'Área de mineração.',
    copa: 'Copa Flor',
    trofeus: 600,
    plataforma: 'Nintendo Switch'
  },

  //Copa Estrela
  {
    id: uuidv4(),
    nome: 'Sunshine Airport',
    imagem: '/mapasfotos/sunshineairport.webp',
    descricao: 'Os jogadores correm por pistas de aeroporto, passando por áreas de check-in, pistas de decolagem e até mesmo por um avião gigante.',
    inspiracao: 'Universo de Super Mario Sunshine.',
    copa: 'Copa Estrela',
    trofeus: 700,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Dolphin Shoals',
    imagem: '/mapasfotos/dolphinshoals.webp',
    descricao: 'A pista apresenta seções onde os jogadores podem impulsionar através de ondas impulsionadas por golfinhos e partes subaquáticas onde karts se transformam em veículos aquáticos.',
    inspiracao: 'Temática aquática e tropical.',
    copa: 'Copa Estrela',
    trofeus: 700,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Electrodome',
    imagem: '/mapasfotos/electrodome.webp',
    descricao: 'Os jogadores atravessam curvas emocionantes e se deparam com características únicas, como partes da pista que se iluminam conforme a música.',
    inspiracao: 'Atmosfera eletrônica e futurista.',
    copa: 'Copa Estrela',
    trofeus: 700,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Mount Wario',
    imagem: '/mapasfotos/mountwario.webp',
    descricao: 'A pista começa com os jogadores descendo de um helicóptero, e a corrida progride por uma variedade de ambientes, incluindo áreas arborizadas, pistas de gelo e túneis.',
    inspiracao: 'Sem inspiração definida.',
    copa: 'Copa Estrela',
    trofeus: 700,
    plataforma: 'Nintendo Switch'
  },

  //Copa Especial
  {
    id: uuidv4(),
    nome: 'Cloudtop Cruise',
    imagem: '/mapasfotos/cloudtopcruise.webp',
    descricao: 'A combinação de design visual impressionante, desafios únicos e a atmosfera celestial fazem de "Cloudtop Cruise" uma pista memorável no Mario Kart 8.',
    inspiracao: 'Temática celestial.',
    copa: 'Copa Especial',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Bone Dry Dunes',
    imagem: '/mapasfotos/bonedrydunes.webp',
    descricao: 'A combinação de elementos temáticos, obstáculos desafiadores e a estética desértica faz de "Bone Dry Dunes" uma pista única e emocionante.',
    inspiracao: 'Temática desértica e esquelética. ',
    copa: 'Copa Especial',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Bowser´s Castle',
    imagem: '/mapasfotos/bowserscastle.webp',
    descricao: 'Cada versão do "Bowser´s Castle" possui elementos únicos, mas geralmente compartilham uma estética inspirada nos castelos do vilão Bowser, conhecido como o principal antagonista da série Super Mario.',
    inspiracao: 'Castelos de Bowser.',
    copa: 'Copa Especial',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Rainbow Road',
    imagem: '/mapasfotos/rainbowroad.webp',
    descricao: 'A característica marcante dessa pista é a sua ambientação em um caminho colorido e cintilante no espaço, frequentemente composto por arco-íris e estrelas.',
    inspiracao: 'Estrada flutuante no espaço.',
    copa: 'Copa Especial',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  
  //Copa Ovo
  {
    id: uuidv4(),
    nome: 'Yoshi Circuit',
    imagem: '/mapasfotos/yoshicircuit.webp',
    descricao: 'É notável por seu layout em formato de ovo, que é uma referência ao ovo de Yoshi.',
    inspiracao: 'Personagem Yoshi.',
    copa: 'Copa Ovo',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Excitebike Arena',
    imagem: '/mapasfotos/Excitebike Arena.jpg',
    descricao: 'É bastante único e se destaca por sua aparência minimalista, com obstáculos simples e um terreno plano.',
    inspiracao: 'Inspiração no jogo "Excitebike".',
    copa: 'Copa Ovo',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },

  {
    id: uuidv4(),
    nome: 'Dragon Drifitway',
    imagem: '/mapasfotos/Dragon_Driftway_MK8_overview.webp',
    descricao: 'É aparente sua estilização que traz caracteristicas da cultura chinesa com seus terrenos elevados e trazendo mais emoção e dificuldade.',
    inspiracao: 'Inpiração no jogo Dragon.',
    copa: 'Copa Ovo',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },

  {
    id: uuidv4(),
    nome: 'Mute City',
    imagem: '/mapasfotos/Mute City.webp',
    descricao: 'Mute City, inspirada em F-Zero, destaca-se no Mario Kart por sua velocidade intensa e curvas desafiadoras, oferecendo uma experiência de corrida empolgante e futurista.',
    inspiracao: 'Foi inspirado na série de jogos F-Zero da Nintendo.',
    copa: 'Copa Ovo',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },

  //Copa Crossover

  {
    id: uuidv4(),
    nome: 'Baby Park',
    imagem: '/mapasfotos/baby-park-mk8.png',
    descricao: 'Baby Park, conhecida por seu design circular simples e curvas fechadas, oferece corridas caóticas e intensas em Mario Kart, sendo notável pela ação constante e uso estratégico de itens.',
    inspiracao: 'Inspirado na versão infantil dos personagens',
    copa: 'Copa Crossover',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },

  {
    id: uuidv4(),
    nome: 'Cheese Land',
    imagem: '/mapasfotos/CheeseLand.webp',
    descricao: 'Cheese Land, uma pista em Mario Kart, destaca-se pelo seu tema alimentar de queijo, apresentando curvas desafiadoras e um design criativo que adiciona diversão ao percurso.',
    inspiracao: 'Inspirado na ideia de um ambiente feito de queijo.',
    copa: 'Copa Crossover',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Wild Woods',
    imagem: '/mapasfotos/Wild woods.webp',
    descricao: 'Wild Woods em Mario Kart é conhecido por sua floresta exuberante, caminhos suspensos desafiadores, saltos naturais e obstáculos, criando uma corrida dinâmica e aventuresca.',
    inspiracao: ' Sua inspiração foi refletir a beleza associados a  ambientes naturais e florestais.',
    copa: 'Copa Crossover',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Animal Crossing',
    imagem: '/mapasfotos/MarioKart8_AnimalCrossing.webp',
    descricao: ' A pista de Animal Crossing em Mario Kart é distintiva por sua mudança de estação do ano e presença de personagens, oferecendo uma experiência encantadora e interativa.',
    inspiracao: 'Inspirada na popular série de jogos Animal Crossing da Nintendo. ',
    copa: 'Copa Crossover',
    trofeus: 900,
    plataforma: 'Nintendo Switch'
  },
  

  //Copa Casco
  {
    id: uuidv4(),
    nome: 'Moo Moo Meadows Wii',
    imagem: '/mapasfotos/moomoomeadows.jfif',
    descricao: 'Proporciona uma experiência de corrida leve e descontraída, destacando-se pela sua atmosfera rural encantadora e elementos interativos, como as vacas que adicionam um toque de humor à competição.',
    inspiracao: 'Temática rural e campestre.',
    copa: 'Copa Casco',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Mario Circuit GBA',
    imagem: '/mapasfotos/mariocircuitgba.webp',
    descricao: 'Essa pista é um remake de uma pista que apareceu pela primeira vez no jogo "Mario Kart: Super Circuit" para o Game Boy Advance.',
    inspiracao: 'Versão expandida do Mario Kart 8 original',
    copa: 'Copa Casco',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Cheep Cheep Beach DS',
    imagem: '/mapasfotos/cheepcheepbeach.webp',
    descricao: 'A pista é conhecida por sua temática de praia e a presença dos Cheep Cheeps, que são peixes comuns no universo Mario.',
    inspiracao: 'Praia tropical.',
    copa: 'Copa Casco',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Toad´s Turnpike N64',
    imagem: '/mapasfotos/Toadsturnpike.webp',
    descricao: '"Toads Turnpike" é lembrado por sua abordagem única, trazendo um cenário urbano realista para o mundo lúdico de Mario Kart, e desafiando os jogadores com obstáculos incomuns para uma pista de kart.',
    inspiracao: 'Praia tropical.',
    copa: 'Copa Casco',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },

  //Copa Banana
  {
    id: uuidv4(),
    nome: 'Dry Dry Desert',
    imagem: '/mapasfotos/drydrydesert.webp',
    descricao: 'Ela é ambientada em um deserto seco e tem características distintas que a tornam única.',
    inspiracao: 'Deserto.',
    copa: 'Copa Banana',
    trofeus: 1200,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Donuts Plaints 3',
    imagem: '/mapasfotos/donutplaints3.webp',
    descricao: 'A pista Donut Plains 3 apresenta um ambiente colorido e nostálgico, com uma trilha que percorre campos, lagos e uma paisagem característica de jogos da série Mario.',
    inspiracao: 'Jogos mais antigos da franquia.',
    copa: 'Copa Banana',
    trofeus: 1200,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Royal Raceway',
    imagem: '/mapasfotos/royalraceway.webp',
    descricao: 'Ela é conhecida por seu cenário real, onde os jogadores correm por uma pista situada em torno de um castelo real.',
    inspiracao: 'Inspirada na pista homônima que apareceu pela primeira vez no jogo Mario Kart 64.',
    copa: 'Copa Banana',
    trofeus: 1200,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'DK Jungle',
    imagem: '/mapasfotos/dkjungle.webp',
    descricao: 'Pista é ambientada em uma selva exuberante, com cipós, barris e outros elementos relacionados ao mundo de Donkey Kong.',
    inspiracao: 'Baseada no universo de Donkey Kong.',
    copa: 'Copa Banana',
    trofeus: 1200,
    plataforma: 'Nintendo Switch'
  },
  
  //Copa Folha
  {
    id: uuidv4(),
    nome: 'Wario Stadium',
    imagem: '/mapasfotos/wariostadium.webp',
    descricao: 'Apresenta grandes saltos, curvas acentuadas e rampas que oferecem oportunidades para manobras acrobáticas.',
    inspiracao: 'Personagem Wario.',
    copa: 'Copa Folha',
    trofeus: 1300,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Sherbet Land',
    imagem: '/mapasfotos/sherbetland.webp',
    descricao: 'A pista é coberta de neve e gelo, com uma série de curvas desafiadoras e obstáculos relacionados ao ambiente gelado.',
    inspiracao: 'Elementos do vasto universo da Nintendo.',
    copa: 'Copa Folha',
    trofeus: 1300,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Music Park',
    imagem: '/mapasfotos/musicpark.webp',
    descricao: 'Essa pista é notável por sua temática musical e elementos interativos.',
    inspiracao: 'Temática musical única.',
    copa: 'Copa Folha',
    trofeus: 1300,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Yoshi Valley',
    imagem: '/mapasfotos/yoshivalley.webp',
    descricao: 'O terreno acidentado, repleto de colinas, vales e quedas, adiciona um elemento de imprevisibilidade à corrida.',
    inspiracao: 'Personagem Yoshi.',
    copa: 'Copa Folha',
    trofeus: 1300,
    plataforma: 'Nintendo Switch'
  },
  
  //Copa Relâmpago
  {
    id: uuidv4(),
    nome: 'Tick Tock Clock',
    imagem: '/mapasfotos/ticktockclock.webp',
    descricao: 'O mapa é ambientado em um grande relógio e oferece uma experiência de corrida única devido à sua mecânica em constante movimento.',
    inspiracao: 'Ambiente de relógio ou maquinaria.',
    copa: 'Copa Relâmpago',
    trofeus: 1400,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Piranha Plant Pipeway',
    imagem: '/mapasfotos/piranhaplantpipeway.webp',
    descricao: 'A pista é construída como uma tubulação, e os jogadores correm através de uma série de canos e passagens subterrâneas.',
    inspiracao: 'Plantas Piranha.',
    copa: 'Copa Relâmpago',
    trofeus: 1400,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Grumble Volcano',
    imagem: '/mapasfotos/grumblevolcano.webp',
    descricao: 'É conhecida por sua dinâmica e desafiadora jogabilidade. A corrida se desenrola em torno e através de uma série de vulcões ativos.',
    inspiracao: 'Ambiente vulcânico e tumultuado.',
    copa: 'Copa Relâmpago',
    trofeus: 1400,
    plataforma: 'Nintendo Switch'
  },
  {
    id: uuidv4(),
    nome: 'Rainbow Road N64',
    imagem: '/mapasfotos/rainbowroad.webp',
    descricao: 'O layout da pista "Rainbow Road" é frequentemente caracterizado por trilhas estreitas e curvas acentuadas, tornando-o um dos mapas mais desafiadores da série.',
    inspiracao: 'Cenário espacial e arco-íris.',
    copa: 'Copa Relâmpago',
    trofeus: 1400,
    plataforma: 'Nintendo Switch'
  },

  //Copa Triforce
  {
    id: uuidv4(),
    nome: 'Rainbow Road N64',
    imagem: '/mapasfotos/MKW_Wario.png',
    descricao: 'O layout da pista "Rainbow Road" é frequentemente caracterizado por trilhas estreitas e curvas acentuadas, tornando-o um dos mapas mais desafiadores da série.',
    inspiracao: 'Cenário espacial e arco-íris.',
    copa: 'Copa Triforce',
    trofeus: 1400,
    plataforma: 'Nintendo Switch'
  },



  //Copa Sino
]
export default mapas