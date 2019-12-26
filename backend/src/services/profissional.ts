import Profissional_Schema, { Profissional_Model } from '../models/profissional'
import User_Schema from '../models/user'
import { Request, Response } from "express"

interface Pacient_Request extends Request {
    body : Profissional_Model
}

export class Profissional {
    public create = async ( req:Pacient_Request, res:Response ) => {

        try{

            const { categorie, CRP, description } = req.body
            
            const { price, user } = req.body
            
            if( !categorie  )
                return res.status(401).send({ error : "categoria não informada" })
            
            if( !description )
                return res.status(401).send({ error : "descrição não informada" })

            if( !user )
                return res.status(401).send({ error : "usuario não informado" })

            if( !price )
                return res.status(401).send({ error : "preço não informado" })

            if( categorie === 'psicologo' && !CRP )
                return res.status(401).send({ error : "CRP não informado" })

            const userExist = await User_Schema.findById(user)

            if( !userExist )
                return res.status(401).send({ error: "paciente não encontrado" })

            const result = await Profissional_Schema.create({ 
                categorie,
                CRP,
                description,
                price,
                user
            })

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public findAll = async ( req:Pacient_Request, res:Response ) => {

        try{

            const result = await Profissional_Schema.find()

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public find = async ( req:Pacient_Request, res:Response ) => {

        try {

            const { id } = req.headers

            const result = await Profissional_Schema.findById(id)

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public delete = async ( req:Pacient_Request, res:Response ) => {

        try {
            const { id } = req.params
    
            if( !id )
                return res.status(401).send({ error: "profissional não informado" })

            const userExist = await User_Schema.findById(id)

            if( !userExist )
                return res.status(401).send({ error: "profissional não encontrado" })

            const profissionalDeleted = await Profissional_Schema.findByIdAndDelete(id)

            const userDeleted = await User_Schema.findByIdAndDelete(id)

            if( !profissionalDeleted || !userDeleted )
                return res.status(401).send({ error: "profissional ou usuario não encontrado" })

            return res.status(200).send({ result: id })

        }catch(error){
            return res.status(401).send({ error })
        }
    }
}

export default new Profissional()