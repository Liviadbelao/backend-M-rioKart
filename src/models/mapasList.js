export class MapasLista {
    constructor() {
        this.mapas = []

    }
    addMapa(mapa) {
        this.mapas.push(mapa)
    }
    getTodosMapas() {
        return this.mapas
    }
    getMapaId(id) {
        return this.mapas.find((mapa) => mapa.id == id)
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