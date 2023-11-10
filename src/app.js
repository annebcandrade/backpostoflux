import express from "express"
import routes from "./routes"

import './database'
import cors from 'cors'

  


class App {
    constructor() {
        this.app = express()

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors()); 
        this.app.use(express.json())
    }

    routes(){
        this.app.use(routes)
    }
}

export default new App().app