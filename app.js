import express from 'express'
import cors from 'cors'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("<h1>Ciao, sono Arturo, il server che ce l'ha duro!</h1>")
})

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})
