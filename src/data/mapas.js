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

  //Copa Casco
  {  
    id: uuidv4(),
    nome: 'Moo Moo Meadows',
    imagem: '/mapasfotos/moomoomeadows.jfif',
    descricao: 'Proporciona uma experiência de corrida leve e descontraída, destacando-se pela sua atmosfera rural encantadora e elementos interativos, como as vacas que adicionam um toque de humor à competição.',
    inspiracao: 'Temática rural e campestre.',
    copa: 'Copa Casco',
    trofeus: 800,
    plataforma: 'Nintendo Switch'
  },
]
export default mapas