const mapas = [
    {
        nome: 'Circuito Mario',
        imagem: '/images/circuitomario',
        descricao: 'Uma pista simples com curvas suaves, item boxes e alguns obstáculos.',
        inspiracao: 'Inspirado no universo geral de Super Mario.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Mansão do Mario',
        imagem: '/images/mansaodomario',
        descricao: 'Uma pista assombrada com corredores estreitos, escadas e fantasmas que podem atrapalhar os jogadores.',
        inspiracao: 'Baseada nas mansões assombradas presentes em vários jogos da série Mario.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Desfiladeiro Toad',
        imagem: '/images/desfiladeiroad',
        descricao: 'Um desfiladeiro colorido com curvas acentuadas, elevações e até uma seção subaquática.',
        inspiracao: 'Sem uma inspiração geográfica específica, mas possui elementos típicos dos jogos do Mario.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Parque Corrida Delfino',
        imagem: '/images/parquecorridadelfino',
        descricao: 'Baseada em Isle Delfino, esta pista apresenta partes subaquáticas e seções em que os jogadores podem usar propulsores.',
        inspiracao: 'Inspirada na Isle Delfino de Super Mario Sunshine.',
        copa: 'Copa Flor',
        trofeus: 600,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pista Mario',
        imagem: '/images/pistamario',
        descricao: 'Uma pista clássica inspirada nas pistas de corrida tradicionais da série Mario Kart.',
        inspiracao: 'Inspirado no universo geral de Super Mario.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pântano Venenoso',
        imagem: '/images/pantanovenenoso',
        descricao: 'Uma pista com temática de pântano comum em jogos de aventura, com lama tóxica, pontes estreitas e atalhos através de cogumelos gigantes.',
        inspiracao: 'Sem uma inspiração geográfica específica, mas com temática de pântano.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Duna do Yoshi',
        imagem: '/images/dunadoyoshi',
        descricao: 'Uma pista desértica com dunas móveis, rampas e partes subterrâneas.',
        inspiracao: 'Inspirado no mundo do Yoshi, com características de deserto.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estádio da Música Electrodrome',
        imagem: '/images/estadiodamusicaelectrodrome',
        descricao: 'Uma pista brilhante e animada com pistas de dança, luzes estroboscópicas e batidas de música que impulsionam os jogadores.',
        inspiracao: 'Sem uma inspiração geográfica específica.',
        copa: 'Copa Casco',
        trofeus: 700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Circuito Toad',
        imagem: '/images/circuitotoad',
        descricao: 'Um circuito rápido com curvas fechadas e uma seção antigravidade que permite aos jogadores correr de cabeça para baixo.',
        inspiracao: 'Inspirado na personagem Toad e seu ambiente geral.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Porto de Toad',
        imagem: '/images/portodetoad',
        descricao: 'Uma corrida ao redor de um porto movimentado, com rampas e desvios.',
        inspiracao: 'Sem uma inspiração geográfica específica, mas com temática portuária.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estrada da Floresta',
        imagem: '/images/estradadafloresta',
        descricao: 'Uma pista através de uma floresta densa, com curvas sinuosas e trechos estreitos.',
        inspiracao: 'Inspirada em ambientes de floresta com caminhos sinuosos.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Volante Wario',
        imagem: '/images/volantewario',
        descricao: 'Uma pista que percorre um estádio cheio de rampas, curvas acentuadas e obstáculos.',
        inspiracao: 'Inspirado no personagem Wario e em seu estádio.',
        copa: 'Copa Seta',
        trofeus: 800,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Minas Twisted Mansion',
        imagem: '/images/minastwistedmansion',
        descricao: 'Uma corrida assustadora dentro de uma mansão mal-assombrada com corredores estreitos, obstáculos e partes antigravidade.',
        inspiracao: 'Baseada em mansões assombradas, com reviravoltas inesperadas.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pista de Sherbet',
        imagem: '/images/pistadesherbet',
        descricao: 'Uma pista gelada com curvas fechadas e partes cobertas de gelo.',
        inspiracao: 'Inspirada em ambientes de gelo e neve.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pico de Sherbet',
        imagem: '/images/picodesherbet',
        descricao: 'Uma corrida íngreme por uma montanha coberta de neve, com muitas rampas e curvas perigosas.',
        inspiracao: 'Inspirado em ambientes de montanha cobertos de neve.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Volante de Mel',
        imagem: '/images/volantedemel',
        descricao: 'Uma pista doce que atravessa um estádio feito de mel, com rampas pegajosas e atalhos.',
        inspiracao: 'Inspirado no personagem Wario, transformando seu estádio em uma pista de mel.',
        copa: 'Copa Estrela',
        trofeus: 900,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Desfiladeiro da Montanha-Russa',
        imagem: '/images/desfiladeiromontanharussa',
        descricao: 'Uma pista de montanha-russa cheia de loopings, quedas íngremes e curvas radicais.',
        inspiracao: 'Inspirado em parques de diversões e montanhas-russas.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pista Donut',
        imagem: '/images/pistadonut',
        descricao: 'Uma pista em formato de rosquinha com curvas fechadas e partes antigravidade.',
        inspiracao: 'Sem uma inspiração geográfica específica.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Praia de Cheep Cheep',
        imagem: '/images/praiadecheepcheep',
        descricao: 'Uma corrida pela praia com água cristalina, Cheep Cheeps e seções subaquáticas.',
        inspiracao: 'Inspirada em praias tropicais com Cheep Cheeps.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Parque Corrida do Boneco de Neve',
        imagem: '/images/parquecorridabonecodeneve',
        descricao: 'Uma pista com tema de inverno, com partes cobertas de neve, bonecos de neve e rampas geladas.',
        inspiracao: 'Inspirado em parques de inverno com bonecos de neve.',
        copa: 'Copa Flor de Cerejeira',
        trofeus: 1000,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Jardim Boreal',
        imagem: '/images/jardimboreal',
        descricao: 'Uma pista que atravessa um jardim coberto de neve, com árvores geladas e terrenos escorregadios.',
        inspiracao: 'Inspirado em jardins de inverno e ambientes cobertos de neve.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Volante Wario',
        imagem: '/images/volantewario',
        descricao: 'Uma corrida por um estádio peculiar de Wario, com obstáculos e surpresas únicas.',
        inspiracao: 'Inspirado no personagem Wario e em seu estádio.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Mina do Céu',
        imagem: '/images/minadoceu',
        descricao: 'Uma mina suspensa no céu com caminhos estreitos e seções antigravidade.',
        inspiracao: 'Inspirado em minas suspensas no céu com caminhos estreitos e seções antigravidade.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estrada do Céu',
        imagem: '/images/estradadoceu',
        descricao: 'Uma estrada flutuante no céu com caminhos sinuosos e obstáculos desafiadores.',
        inspiracao: 'Inspirado em estradas flutuantes no céu com caminhos sinuosos e obstáculos desafiadores.',
        copa: 'Copa Banana',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },

      // próximos cards

      {
        nome: 'Rota Céu',
        imagem: '/images/circuitomario',
        descricao: 'Uma pista que sobe para o céu com caminhos estreitos e elevações.',
        inspiracao: ' Uma pista que sobe para o céu, sem uma inspiração geográfica específica.',
        copa: 'Copa Folha',
        trofeus:  1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Circuito Yoshi',
        imagem: '/images/mansaodomario',
        descricao: 'Um circuito com temática de Yoshi, com caminhos sinuosos e uma seção antigravidade.',
        inspiracao: 'Inspirado no personagem Yoshi e em seus ambientes.',
        copa: 'Copa Folha',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Mansão do Cidadão',
        imagem: '/images/desfiladeiroad',
        descricao: 'Uma mansão com salas extravagantes, corredores estreitos e uma seção antigravidade.',
        inspiracao: 'Inspirado em mansões assombradas e na cidade.',
        copa: 'Copa Folha',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estádio do Animal Crossing',
        imagem: '/images/parquecorridadelfino',
        descricao: 'Baseada na série Animal Crossing, esta pista muda de estação conforme as voltas, afetando a jogabilidade.',
        inspiracao: 'Inspirado na série Animal Crossing, mudando de estação a cada volta.',
        copa: 'Copa Folha',
        trofeus: 1100,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pista da Coroa',
        imagem: '/images/pistamario',
        descricao: 'Uma pista luxuosa dentro do Castelo da Peach, com caminhos elaborados e uma seção antigravidade.',
        inspiracao: 'Inspirado em ambientes luxuosos dentro do Castelo da Peach.',
        copa: 'Copa Especial',
        trofeus: 1200,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Vulcão Grumble',
        imagem: '/images/pantanovenenoso',
        descricao: 'Uma pista vulcânica com lava, rampas e partes subterrâneas.',
        inspiracao: 'Inspirado em ambientes vulcânicos.',
        copa: 'Copa Especial',
        trofeus: 1200,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Desfiladeiro N64 Rainbow Road',
        imagem: '/images/dunadoyoshi',
        descricao: 'Uma versão modernizada da icônica Rainbow Road do Nintendo 64, com seções antigravidade.',
        inspiracao: 'Uma versão modernizada da icônica Rainbow Road do Nintendo 64.',
        copa: 'Copa Especial',
        trofeus:  1200,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Parque Corrida da Pista Ice',
        imagem: '/images/estadiodamusicaelectrodrome',
        descricao: 'Um parque de diversões de inverno com gelo, rampas e partes subterrâneas.',
        inspiracao: 'Inspirado em parques de diversões de inverno.',
        copa: 'Copa Especial',
        trofeus: 1200,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Circuito Excitebike',
        imagem: '/images/circuitotoad',
        descricao: 'Baseada no jogo Excitebike, esta pista tem saltos e rampas inspirados no jogo de motocross.',
        inspiracao: ' Baseado no jogo Excitebike, com rampas e saltos inspirados no motocross.',
        copa: 'Copa Ovo',
        trofeus: 1300 ,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Floresta do Dragão',
        imagem: '/images/portodetoad',
        descricao: 'Uma pista florestal com caminhos estreitos e obstáculos, incluindo a presença de dragões.',
        inspiracao: 'Inspirada em florestas com a presença de dragões.',
        copa: 'Copa Ovo',
        trofeus: 1300 ,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estádio da Música Hyrule',
        imagem: '/images/estradadafloresta',
        descricao: 'Baseada na série The Legend of Zelda, esta pista inclui elementos da franquia, como rupees e Triforces.',
        inspiracao: 'Inspirado na série The Legend of Zelda, com elementos da franquia.',
        copa: 'Copa Ovo',
        trofeus: 1300,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Cidade das Luzes',
        imagem: '/images/volantewario',
        descricao: 'Uma pista urbana noturna com muitas luzes brilhantes, rampas e caminhos elevados.',
        inspiracao: 'Inspirado em ambientes urbanos noturnos com muitas luzes.',
        copa: 'Copa Ovo',
        trofeus:1300,
        plataforma: 'Nintendo Switch'
      },

      //Copa Leve

      {
        nome: 'Circuito do Pára-Quedas',
        imagem: '/images/minastwistedmansion',
        descricao: 'Uma pista situada em um aeroporto, com caminhos elevados e rampas que lembram uma pista de decolagem.',
        inspiracao: 'Inspirado em aeroportos, com pistas elevadas e rampas que lembram uma pista de decolagem.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Água Piscina',
        imagem: '/images/pistadesherbet',
        descricao: 'Uma pista aquática que passa por uma piscina com partes subaquáticas e ondas.',
        inspiracao: 'Uma pista aquática que passa por uma piscina com partes subaquáticas e ondas.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Porto de Cheep Cheep',
        imagem: '/images/picodesherbet',
        descricao: 'Um porto movimentado com partes subaquáticas, barcos e caminhos estreitos.',
        inspiracao: 'Inspirado em portos movimentados com partes subaquáticas, barcos e caminhos estreitos.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Castelo de Bowser',
        imagem: '/images/volantedemel',
        descricao: 'Uma pista dentro do Castelo de Bowser, com seções antigravidade e obstáculos desafiadores.',
        inspiracao: ' Inspirado no Castelo de Bowser, com seções antigravidade e obstáculos desafiadores.',
        copa: 'Copa Leve',
        trofeus: 1400,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Circuito do Céu',
        imagem: '/images/desfiladeiromontanharussa',
        descricao: 'Uma pista elevada no céu com caminhos estreitos e obstáculos, proporcionando uma experiência emocionante.',
        inspiracao: ' Inspirado em ambientes celestiais com caminhos estreitos e obstáculos.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500 ,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Desfiladeiro do Céu',
        imagem: '/images/pistadonut',
        descricao: 'Um desfiladeiro nas nuvens com curvas acentuadas e partes antigravidade.',
        inspiracao: 'Inspirado em desfiladeiros nas nuvens com curvas acentuadas e partes antigravidade.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Mina do Céu',
        imagem: '/images/praiadecheepcheep',
        descricao: 'Uma mina suspensa no céu com caminhos estreitos e seções antigravidade.',
        inspiracao: 'Inspirado em minas suspensas no céu com caminhos estreitos e seções antigravidade.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estrada do Céu',
        imagem: '/images/parquecorridabonecodeneve',
        descricao: 'Uma estrada flutuante no céu com caminhos sinuosos e obstáculos desafiadores.',
        inspiracao: 'Inspirado em estradas flutuantes no céu com caminhos sinuosos e obstáculos desafiadores.',
        copa: 'Copa Flor de Ouro',
        trofeus: 1500,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Estádio de Wario',
        imagem: '/images/jardimboreal',
        descricao: ' Pista cheia de obstáculos malucos e truques, refletindo a personalidade excêntrica de Wario. Terrenos irregulares e surpresas inesperadas mantêm a corrida animada e imprevisível.',
        inspiracao: 'Criado para ser uma extensão do estilo trapaceiro e extravagante de Wario, o estádio é uma expressão divertida da natureza caótica do personagem.',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Circuito da Rosalina',
        imagem: '/images/volantewario',
        descricao: 'Uma jornada celestial com paisagens cósmicas. A pista oferece curvas suaves, desafios de gravidade e visuais deslumbrantes, incorporando uma atmosfera mágica e etérea.',
        inspiracao: 'Inspirado na personagem Rosalina e sua conexão com o espaço, o circuito reflete a majestade do cosmos, proporcionando uma experiência visualmente impressionante.',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Pista da Música Rainbow Road',
        imagem: '/images/minadoceu',
        descricao: 'Pista festiva suspensa no espaço, rodeada por arco-íris brilhantes. Desafios visuais e uma trilha sonora dinâmica criam uma experiência sensorial única e empolgante.',
        inspiracao: 'Seguindo a tradição da série Mario Kart, a pista é um espetáculo visual e auditivo, oferecendo uma corrida emocionante em um ambiente festivo.',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },
      {
        nome: 'Castelo de Bowser',
        imagem: '/images/estradadoceu',
        descricao: 'Uma pista épica e intimidante, ambientada nos domínios do vilão Bowser. Corredores enfrentam desafios intensos dentro e ao redor do castelo, incluindo a fúria do próprio Bowser.',
        inspiracao: 'Baseado nos castelos sinistros associados a Bowser, o circuito transporta os jogadores para um confronto emocionante com o vilão, capturando a essência da rivalidade. ',
        copa: 'Copa Coroa',
        trofeus: 1700,
        plataforma: 'Nintendo Switch'
      },

]
export default mapas