import express from 'express'
import { Request, Response, NextFunction } from 'express'

const app = express()
const port = 3000

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to train your mental math skills!")
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        status: 500,
        message: "There was an error",
        error: err.message
    })
})

app.listen(port, () => {
    console.log(`Server running at http//localhost:${port}`)
})