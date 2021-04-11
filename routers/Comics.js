const express = require('express');
const router = express.Router();
const { Comic, comic_valid, comic_valid_update } = require('../models/comic');
const _ = require('lodash')

comics = [
    { titre: 'naruto', auteur: 'Nasri', url: 'xcezgecngfefe.jpg' },
    { titre: 'hazim', auteur: 'Nasri', url: 'xcezgecngfefe.jpg' },
    { titre: 'dai', auteur: 'Nasri', url: 'xcezgecngfefe.jpg' }
]


router.get('', (req, res) => {
    res.status(200).send(comics)
})

router.post('', async(req, res) => {
    let valid_res = comic_valid(req.body);
    if (valid_res.error)
        return res.status(400).send(valid_res.error.details[0].message)
    let comic = _.pick(req.body, ['titre', 'auteur', 'url']);

    comics.push(comic)
    res.status(201).send(comic)
});

router.get('/titre/:titre', (req, res) => {

    let comic = comics.find((s) => s.titre == req.params.titre.toLowerCase());
    if (!comic)
        return res.status(404).send('Comics not Found')
    res.send(comic)
});

router.put('/titre/:titre', function(req, res) {
    let valid_res = comic_valid_update(req.body);
    if (valid_res.error)
        return res.status(400).send(valid_res.error.details[0].message)
    let comic = comics.find(s => s.titre === req.params.titre.toLowerCase());
    if (!comic)
        return res.status(404).send('comic with this titre is not found');
    comic = _.merge(comic, req.body);
    res.send(comic)
});


router.delete('/delete/:titre', (req, res) => {
    let comic = comics.find((s) => s.titre === req.params.titre.toLowerCase())
    console.log(comic)
    if (!comic) {
        return res.status(400).send({ 'error': "comic n'existe pas dans notre base" })
    }

    comics = comics.filter((s) => s.titre != req.params.titre.toLowerCase())
    res.status(204).send({ 'success': 'Supprimer avec succées' })
})


module.exports = router