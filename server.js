const express = require('express')

const contactRoute = require('./api/routes/contact')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/api/contacts', contactRoute)


app.get('/', (req , res) => {
    res.send('<h1>Hello World</h1>')
})

// app.get('/api/contacts', (req , res) => {
//     res.json(contacts)
// })

// app.post('/api/contacts', (req , res) => {
//     res.json({
//         message : "I am Post Method"
//     })
// })

// app.get('/posts',(req, res) => {
//     res.send("<h1>I am from post page</h1>")
// })

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
})

const contacts = [
    {
        name : "Shahadat" , email : "shahadat.sust.math@gmail.com"
    },
    {
        name : "Nirob" , email : "nirobsyclonite@gmail.com"
    }
]