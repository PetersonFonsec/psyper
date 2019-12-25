import Query_Schema, { Query_Model } from '../models/query'
import { Request, Response } from 'express'

interface Query_Request extends Request {
    body : Query_Model
}

export class Query {
    
    public list_All_Query = async (req:Query_Request, res:Response) => {
        try {
            
            const result = await Query_Schema.find()
            
            return res.status(200).send({ result })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public make_Appointment = async (req:Query_Request, res:Response) => {
        try {
            
            const result = await Query_Schema.find()
            
            return res.status(200).send({ result })

        } catch (error) {
            
        }
    }

    public reschedule_query = async (req:Query_Request, res:Response) => {
        try {    
            const { profissional } = req.body
            const { patient } = req.body
            const { day } = req.body
            const { month } = req.body
            const { years } = req.body
            const { hour } = req.body
            const { duration } = req.body
            
            if( !profissional ) return res.status(401).send({ error: 'campos obrigatorio'})
            if( !patient ) return res.status(401).send({ error: 'campos obrigatorio'})
            if( !day ) return res.status(401).send({ error: 'campos obrigatorio'})
            if( !month ) return res.status(401).send({ error: 'campos obrigatorio'})
            if( !years ) return res.status(401).send({ error: 'campos obrigatorio'})
            if( !hour ) return res.status(401).send({ error: 'campos obrigatorio'})
            if( !duration ) return res.status(401).send({ error: 'campos obrigatorio'})

            const result = await Query_Schema.create(req.body)

            return res.status(401).send({ result })
            
        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public cancel_consultation(req:Query_Request, res:Response){
        try {
            
        } catch (error) {
            
        }
    }
}

export default new Query()