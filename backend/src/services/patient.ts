import Pacient_Schema, { Pacient_Model } from "../models/pacient"
import User_Schema from '../models/user'
import { Request, Response } from "express"

interface Pacient_Request extends Request {
    body : Pacient_Model
}

export class Pacient {
    public create = async ( req:Pacient_Request, res:Response ) => {

        try{

            const { user } = req.body

            if( !user )
                return res.status(401).send({ error : "usuario não informado" })

            const result = await Pacient_Schema.create(user)
            
            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public findAll = async ( req:Pacient_Request, res:Response ) => {

        try{

            const result = await Pacient_Schema.find()

            return res.status(401).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public find = async ( req:Pacient_Request, res:Response ) => {

        try {

            const { id } = req.headers

            const result = await Pacient_Schema.findById(id)

            return res.status(401).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public delete = async ( req:Pacient_Request, res:Response ) => {

        try {
            const { id } = req.params

            const userExist = await User_Schema.findById(id)

            if( !userExist )
                return res.status(401).send({ error: "paciente não encontrado" })

            const patientDeleted = await Pacient_Schema.findByIdAndDelete(id)

            const userDeleted = await User_Schema.findByIdAndDelete(id)

            if( !patientDeleted || !userDeleted )
                return res.status(401).send({ error: "paciente ou usuario não encontrado" })

            return res.status(200).send({ result: id })

        }catch(error){
            return res.status(401).send({ error })
        }
    }
}

export default new Pacient()