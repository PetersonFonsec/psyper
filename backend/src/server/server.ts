import * as Express from "express"
import * as Cors from "cors"
import * as Helmet from "helmet"
import { json, urlencoded } from "body-parser"

class Server {
    
    public express: Express.Application

    constructor(){
        this.express = Express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(Cors())
        this.express.use(Helmet())
        this.express.use(json())
        this.express.use(urlencoded({ extended: true }))
    }

    routes(){

    }

}

export default new Server().express