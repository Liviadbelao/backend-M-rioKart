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

]