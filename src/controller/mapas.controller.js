import { mapas } from '../../data/mapas/mapas.js'
export const getMapas = (req, res) => {
    let map = mapas;



    return res.status(200).send({ map })
}