import * as Compression from "compression"
import * as Cors from "cors"
import * as Express from "express"
import * as Helmet from "helmet"
import * as Morgan from "morgan"
import Logger from "../config/winston"
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
        this.express.use(Compression())
        this.express.use(Helmet())
        this.express.use(json())
        this.express.use(Morgan( "dev", {
            stream: {
                write: menssagem => Logger.info( menssagem )
            }
        }))
        this.express.use(urlencoded({ extended: true }))
    }

    routes(){

    }

}

export default new Server().express