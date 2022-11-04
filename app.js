import express from 'express'
import cors from 'cors'

const port = 3000
const host = '0.0.0.0'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("<h1>Ciao, sono Arturo, il server che ce l'ha duro!</h1>")
})

app.listen(port, host, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})