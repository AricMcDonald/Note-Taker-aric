const { route } = require('.');
const noteUtils = require('../../utils/utls');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    noteUtils
    .getNotes()
    .then((notes) => 
        res.json(notes))
    .catch((err)=> {
        res.status(500).json(err)
    })
});

router.post('/notes', (req, res) => {
    noteUtils
    .addNote(req.body)
    .then((note) =>
    res.json(note))
    .catch((err) => 
    res.status(500).json(err))
})

router.delete('/notes/:id', (req, res) => {
    noteUtils
    .deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch((err) => res.status(500).json(err));
})

module.exports = router