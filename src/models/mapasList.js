export class MapasLista {
    constructor() {
        this.mapas = []

    }
    addMapa(mapa) {
        this.mapas.push(mapa)
    }
    getTodosMapas(dados) {

        const { nome, trofeus, copa } = dados;

        if (nome || trofeus || copa) {
            //faco o filtro aqui
            return this.getMapasByNomeTrofeusCopas(nome, trofeus, copa);
        }

        return this.mapas
    }

    getMapasByNomeTrofeusCopas(nome, trofeus, copa) {
        //console.log("//consoledaClass",nome, trofeus, copa)
        if (nome) {
            nome = nome.toUpperCase()
        }
        if (trofeus) {
            trofeus = parseInt(trofeus);
        }
        if (copa) {
            copa = copa.toUpperCase()
        }

        const resultado = this.mapas.filter((mapa) => {
            const nomeCondicao = nome == undefined || mapa.nome.toUpperCase() == nome;
            const trofeusCondicao = trofeus == undefined || mapa.trofeus == trofeus;
            const copaCondicao = copa == undefined || mapa.copa.toUpperCase() == copa;
            //console.log({nomeCondicao})
            return nomeCondicao && trofeusCondicao && copaCondicao;
        });

        return resultado;
    }
    getMapaId(id) {
        return this.mapas.find((mapa) => mapa.id === id)
    }


    atualizarmapa(id, nome, imagem, descricao, inspiracao, copa, trofeus, plataforma) {
        const mapa = this.getMapaId(id);

        if (mapa) {
            mapa.nome = nome;
            mapa.imagem = imagem;
            mapa.descricao = descricao;
            mapa.inspiracao = inspiracao;
            mapa.copa = copa;
            mapa.trofeus = trofeus
            mapa.plataforma = plataforma
        }

        return mapa;

    }
    removerMapa(id) {
        this.mapas = this.mapas.filter((mapa) => mapa.id != id)
    }
}