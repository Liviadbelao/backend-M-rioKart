import { v4 as uuidv4 } from "uuid";

const mapas = [
    {
        id: uuidv4(),
        nome: 'Circuito Mario',
        imagem: '/mapasfotos/CircuitoMario.webp',
        descricao: 'Uma pista simples com curvas suaves, item boxes e alguns obstáculos.',
        inspiracao: 'Inspirado no universo geral de Super Mario.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Mansão do Mario',
        imagem: '/mapasfotos/mansaodomario.png',
        descricao: 'Uma pista assombrada com corredores estreitos, escadas e fantasmas que podem atrapalhar os jogadores.',
        inspiracao: 'Baseada nas mansões assombradas presentes em vários jogos da série Mario.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {  
        id: uuidv4(),
        nome: 'Desfiladeiro Toad',
        imagem: '/mapasfotos/desfiladeirotoad.webp',
        descricao: 'Um desfiladeiro colorido com curvas acentuadas, elevações e até uma seção subaquática.',
        inspiracao: 'Sem uma inspiração geográfica específica, mas possui elementos típicos dos jogos do Mario.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Parque Corrida Delfino',
        imagem: '/mapasfotos/parquecorridadelfino.jpg',
        descricao: 'Baseada em Isle Delfino, esta pista apresenta partes subaquáticas e seções em que os jogadores podem usar propulsores.',
        inspiracao: 'Inspirada na Isle Delfino de Super Mario Sunshine.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pista Mario',
        imagem: '/mapasfotos/pistamario.jpg',
        descricao: 'Uma pista clássica inspirada nas pistas de corrida tradicionais da série Mario Kart.',
        inspiracao: 'Inspirado no universo geral de Super Mario.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pântano Venenoso',
        imagem: '/mapasfotos/notfound.png',
        descricao: 'Uma pista com temática de pântano comum em jogos de aventura, com lama tóxica, pontes estreitas e atalhos através de cogumelos gigantes.',
        inspiracao: 'Sem uma inspiração geográfica específica, mas com temática de pântano.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Duna do Yoshi',
        imagem: '/mapasfotos/dunadoyoshi.webp',
        descricao: 'Uma pista desértica com dunas móveis, rampas e partes subterrâneas.',
        inspiracao: 'Inspirado no mundo do Yoshi, com características de deserto.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estádio da Música Electrodrome',
        imagem: '/mapasfotos/estadiodamusicaelectrodrome.webp',
        descricao: 'Uma pista brilhante e animada com pistas de dança, luzes estroboscópicas e batidas de música que impulsionam os jogadores.',
        inspiracao: 'Sem uma inspiração geográfica específica.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Circuito Toad',
        imagem: '/mapasfotos/circuitotoad',
        descricao: 'Um circuito rápido com curvas fechadas e uma seção antigravidade que permite aos jogadores correr de cabeça para baixo.',
        inspiracao: 'Inspirado na personagem Toad e seu ambiente geral.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Porto de Toad',
        imagem: '/mapasfotos/portodetoad',
        descricao: 'Uma corrida ao redor de um porto movimentado, com rampas e desvios.',
        inspiracao: 'Sem uma inspiração geográfica específica, mas com temática portuária.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estrada da Floresta',
        imagem: '/mapasfotos/estradadafloresta',
        descricao: 'Uma pista através de uma floresta densa, com curvas sinuosas e trechos estreitos.',
        inspiracao: 'Inspirada em ambientes de floresta com caminhos sinuosos.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Volante Wario',
        imagem: '/mapasfotos/volantewario',
        descricao: 'Uma pista que percorre um estádio cheio de rampas, curvas acentuadas e obstáculos.',
        inspiracao: 'Inspirado no personagem Wario e em seu estádio.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Minas Twisted Mansion',
        imagem: '/mapasfotos/minastwistedmansion',
        descricao: 'Uma corrida assustadora dentro de uma mansão mal-assombrada com corredores estreitos, obstáculos e partes antigravidade.',
        inspiracao: 'Baseada em mansões assombradas, com reviravoltas inesperadas.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pista de Sherbet',
        imagem: '/mapasfotos/pistadesherbet',
        descricao: 'Uma pista gelada com curvas fechadas e partes cobertas de gelo.',
        inspiracao: 'Inspirada em ambientes de gelo e neve.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pico de Sherbet',
        imagem: '/mapasfotos/picodesherbet',
        descricao: 'Uma corrida íngreme por uma montanha coberta de neve, com muitas rampas e curvas perigosas.',
        inspiracao: 'Inspirado em ambientes de montanha cobertos de neve.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Volante de Mel',
        imagem: '/mapasfotos/volantedemel',
        descricao: 'Uma pista doce que atravessa um estádio feito de mel, com rampas pegajosas e atalhos.',
        inspiracao: 'Inspirado no personagem Wario, transformando seu estádio em uma pista de mel.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Desfiladeiro da Montanha-Russa',
        imagem: '/mapasfotos/desfiladeiromontanharussa',
        descricao: 'Uma pista de montanha-russa cheia de loopings, quedas íngremes e curvas radicais.',
        inspiracao: 'Inspirado em parques de diversões e montanhas-russas.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pista Donut',
        imagem: '/mapasfotos/pistadonut',
        descricao: 'Uma pista em formato de rosquinha com curvas fechadas e partes antigravidade.',
        inspiracao: 'Sem uma inspiração geográfica específica.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Praia de Cheep Cheep',
        imagem: '/mapasfotos/praiadecheepcheep',
        descricao: 'Uma corrida pela praia com água cristalina, Cheep Cheeps e seções subaquáticas.',
        inspiracao: 'Inspirada em praias tropicais com Cheep Cheeps.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Parque Corrida do Boneco de Neve',
        imagem: '/mapasfotos/parquecorridabonecodeneve',
        descricao: 'Uma pista com tema de inverno, com partes cobertas de neve, bonecos de neve e rampas geladas.',
        inspiracao: 'Inspirado em parques de inverno com bonecos de neve.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Jardim Boreal',
        imagem: '/mapasfotos/jardimboreal',
        descricao: 'Uma pista que atravessa um jardim coberto de neve, com árvores geladas e terrenos escorregadios.',
        inspiracao: 'Inspirado em jardins de inverno e ambientes cobertos de neve.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Volante Wario',
        imagem: '/mapasfotos/volantewario',
        descricao: 'Uma corrida por um estádio peculiar de Wario, com obstáculos e surpresas únicas.',
        inspiracao: 'Inspirado no personagem Wario e em seu estádio.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Mina do Céu',
        imagem: '/mapasfotos/minadoceu',
        descricao: 'Uma mina suspensa no céu com caminhos estreitos e seções antigravidade.',
        inspiracao: 'Inspirado em minas suspensas no céu com caminhos estreitos e seções antigravidade.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estrada do Céu',
        imagem: '/mapasfotos/estradadoceu',
        descricao: 'Uma estrada flutuante no céu com caminhos sinuosos e obstáculos desafiadores.',
        inspiracao: 'Inspirado em estradas flutuantes no céu com caminhos sinuosos e obstáculos desafiadores.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },

      // próximos cards

      {
        id: uuidv4(),
        nome: 'Rota Céu',
        imagem: '/mapasfotos/circuitomario',
        descricao: 'Uma pista que sobe para o céu com caminhos estreitos e elevações.',
        inspiracao: ' Uma pista que sobe para o céu, sem uma inspiração geográfica específica.',
        copa: 'Copa Folha',
        trofeus:  1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Circuito Yoshi',
        imagem: '/mapasfotos/mansaodomario',
        descricao: 'Um circuito com temática de Yoshi, com caminhos sinuosos e uma seção antigravidade.',
        inspiracao: 'Inspirado no personagem Yoshi e em seus ambientes.',
        copa: 'Copa Folha',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Mansão do Cidadão',
        imagem: '/mapasfotos/desfiladeiroad',
        descricao: 'Uma mansão com salas extravagantes, corredores estreitos e uma seção antigravidade.',
        inspiracao: 'Inspirado em mansões assombradas e na cidade.',
        copa: 'Copa Folha',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estádio do Animal Crossing',
        imagem: '/mapasfotos/parquecorridadelfino',
        descricao: 'Baseada na série Animal Crossing, esta pista muda de estação conforme as voltas, afetando a jogabilidade.',
        inspiracao: 'Inspirado na série Animal Crossing, mudando de estação a cada volta.',
        copa: 'Copa Folha',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pista da Coroa',
        imagem: '/mapasfotos/pistamario',
        descricao: 'Uma pista luxuosa dentro do Castelo da Peach, com caminhos elaborados e uma seção antigravidade.',
        inspiracao: 'Inspirado em ambientes luxuosos dentro do Castelo da Peach.',
        copa: 'Copa Especial',
        trofeus: 1200,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Vulcão Grumble',
        imagem: '/mapasfotos/pantanovenenoso',
        descricao: 'Uma pista vulcânica com lava, rampas e partes subterrâneas.',
        inspiracao: 'Inspirado em ambientes vulcânicos.',
        copa: 'Copa Especial',
        trofeus: 1200,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Desfiladeiro N64 Rainbow Road',
        imagem: '/mapasfotos/dunadoyoshi',
        descricao: 'Uma versão modernizada da icônica Rainbow Road do Nintendo 64, com seções antigravidade.',
        inspiracao: 'Uma versão modernizada da icônica Rainbow Road do Nintendo 64.',
        copa: 'Copa Especial',
        trofeus:  1200,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Parque Corrida da Pista Ice',
        imagem: '/mapasfotos/estadiodamusicaelectrodrome',
        descricao: 'Um parque de diversões de inverno com gelo, rampas e partes subterrâneas.',
        inspiracao: 'Inspirado em parques de diversões de inverno.',
        copa: 'Copa Especial',
        trofeus: 1200,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Circuito Excitebike',
        imagem: '/mapasfotos/circuitotoad',
        descricao: 'Baseada no jogo Excitebike, esta pista tem saltos e rampas inspirados no jogo de motocross.',
        inspiracao: ' Baseado no jogo Excitebike, com rampas e saltos inspirados no motocross.',
        copa: 'Copa Ovo',
        trofeus: 1300 ,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Floresta do Dragão',
        imagem: '/mapasfotos/portodetoad',
        descricao: 'Uma pista florestal com caminhos estreitos e obstáculos, incluindo a presença de dragões.',
        inspiracao: 'Inspirada em florestas com a presença de dragões.',
        copa: 'Copa Ovo',
        trofeus: 1300 ,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estádio da Música Hyrule',
        imagem: '/mapasfotos/estradadafloresta',
        descricao: 'Baseada na série The Legend of Zelda, esta pista inclui elementos da franquia, como rupees e Triforces.',
        inspiracao: 'Inspirado na série The Legend of Zelda, com elementos da franquia.',
        copa: 'Copa Ovo',
        trofeus: 1300,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Cidade das Luzes',
        imagem: '/mapasfotos/volantewario',
        descricao: 'Uma pista urbana noturna com muitas luzes brilhantes, rampas e caminhos elevados.',
        inspiracao: 'Inspirado em ambientes urbanos noturnos com muitas luzes.',
        copa: 'Copa Ovo',
        trofeus:1300,
        plataforma: 'Nintendo Switch'
      },

      //Copa Leve

      {
        id: uuidv4(),
        nome: 'Circuito do Pára-Quedas',
        imagem: '/mapasfotos/minastwistedmansion',
        descricao: 'Uma pista situada em um aeroporto, com caminhos elevados e rampas que lembram uma pista de decolagem.',
        inspiracao: 'Inspirado em aeroportos, com pistas elevadas e rampas que lembram uma pista de decolagem.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Água Piscina',
        imagem: '/mapasfotos/pistadesherbet',
        descricao: 'Uma pista aquática que passa por uma piscina com partes subaquáticas e ondas.',
        inspiracao: 'Uma pista aquática que passa por uma piscina com partes subaquáticas e ondas.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Porto de Cheep Cheep',
        imagem: '/mapasfotos/picodesherbet',
        descricao: 'Um porto movimentado com partes subaquáticas, barcos e caminhos estreitos.',
        inspiracao: 'Inspirado em portos movimentados com partes subaquáticas, barcos e caminhos estreitos.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Castelo de Bowser',
        imagem: '/mapasfotos/volantedemel',
        descricao: 'Uma pista dentro do Castelo de Bowser, com seções antigravidade e obstáculos desafiadores.',
        inspiracao: ' Inspirado no Castelo de Bowser, com seções antigravidade e obstáculos desafiadores.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Circuito do Céu',
        imagem: '/mapasfotos/desfiladeiromontanharussa',
        descricao: 'Uma pista elevada no céu com caminhos estreitos e obstáculos, proporcionando uma experiência emocionante.',
        inspiracao: ' Inspirado em ambientes celestiais com caminhos estreitos e obstáculos.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500 ,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Desfiladeiro do Céu',
        imagem: '/mapasfotos/pistadonut',
        descricao: 'Um desfiladeiro nas nuvens com curvas acentuadas e partes antigravidade.',
        inspiracao: 'Inspirado em desfiladeiros nas nuvens com curvas acentuadas e partes antigravidade.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Mina do Céu',
        imagem: '/mapasfotos/praiadecheepcheep',
        descricao: 'Uma mina suspensa no céu com caminhos estreitos e seções antigravidade.',
        inspiracao: 'Inspirado em minas suspensas no céu com caminhos estreitos e seções antigravidade.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estrada do Céu',
        imagem: '/mapasfotos/parquecorridabonecodeneve',
        descricao: 'Uma estrada flutuante no céu com caminhos sinuosos e obstáculos desafiadores.',
        inspiracao: 'Inspirado em estradas flutuantes no céu com caminhos sinuosos e obstáculos desafiadores.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Estádio de Wario',
        imagem: '/mapasfotos/jardimboreal',
        descricao: ' Pista cheia de obstáculos malucos e truques, refletindo a personalidade excêntrica de Wario. Terrenos irregulares e surpresas inesperadas mantêm a corrida animada e imprevisível.',
        inspiracao: 'Criado para ser uma extensão do estilo trapaceiro e extravagante de Wario, o estádio é uma expressão divertida da natureza caótica do personagem.',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Circuito da Rosalina',
        imagem: '/mapasfotos/volantewario',
        descricao: 'Uma jornada celestial com paisagens cósmicas. A pista oferece curvas suaves, desafios de gravidade e visuais deslumbrantes, incorporando uma atmosfera mágica e etérea.',
        inspiracao: 'Inspirado na personagem Rosalina e sua conexão com o espaço, o circuito reflete a majestade do cosmos, proporcionando uma experiência visualmente impressionante.',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Pista da Música Rainbow Road',
        imagem: '/mapasfotos/minadoceu',
        descricao: 'Pista festiva suspensa no espaço, rodeada por arco-íris brilhantes. Desafios visuais e uma trilha sonora dinâmica criam uma experiência sensorial única e empolgante.',
        inspiracao: 'Seguindo a tradição da série Mario Kart, a pista é um espetáculo visual e auditivo, oferecendo uma corrida emocionante em um ambiente festivo.',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },
      {
        id: uuidv4(),
        nome: 'Castelo de Bowser',
        imagem: '/mapasfotos/estradadoceu',
        descricao: 'Uma pista épica e intimidante, ambientada nos domínios do vilão Bowser. Corredores enfrentam desafios intensos dentro e ao redor do castelo, incluindo a fúria do próprio Bowser.',
        inspiracao: 'Baseado nos castelos sinistros associados a Bowser, o circuito transporta os jogadores para um confronto emocionante com o vilão, capturando a essência da rivalidade. ',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },

]
export default mapas