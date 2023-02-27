// All routes should be here releted to contact
const express = require('express')
const router = express.Router()

// Get
router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Hello, I am from All Contacts Get Route!'
    })
})

// Post
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'I am from Post Router!'
    })
})

// Dynamic Route /:
router.get('/:id', (req, res, next) => {
    // const id = req.params.id
    // res.json({
    //     id
    // })
    res.json({
        message: 'I am a single Contact'
    })
})

router.put('/:id', (req, res, next) => {
    res.json({
        message: 'I am a PUT route'
    })
})

router.delete('/:id', (req, res, next) => {
    res.json({
        message: 'I am a Delete route'
    })
})
module.exports = router