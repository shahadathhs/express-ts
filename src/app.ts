import express, { Request, Response } from 'express'
const app = express()

// ** middlewares **
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())
app.use(express.raw())

// ** routes **
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
})

export default app;