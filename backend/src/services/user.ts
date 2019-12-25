import User_Schema, { User_Model } from '../models/user'
import { hashSync, genSaltSync } from 'bcryptjs'
import { Request , Response } from 'express'
import Auth from './Auth'

interface User_Request extends Request {
    body : User_Model
}

export class User {
    
    public async emailExists( email:string ):Promise<Boolean>{
        
        if( !email ) return false

        const emailExists = await User_Schema.findOne({ email })

        return !!(emailExists)
    }

    public async cpfExists( cpf:string ):Promise<Boolean>{
        
        if( !cpf ) return false

        const cpfExists = await User_Schema.findOne({ cpf })

        return !!(cpfExists)
    }

    public create = async ( req:User_Request, res:Response ) => {
        
        const { body } = req

        const { email, password, name, cpf } = body 

        if( !name || !email || !password)
            return res.status(401).send({ error: 'Nome, Email e ou Senha não informados' })            

        if( !cpf ) return res.status(401).send({ error: 'CPF não informado' })            

        try {
            
            if( this.emailExists(email) )   
                return res.status(401).send({ error: 'Email já cadastrado' })
            
            if( this.cpfExists(cpf) )   
                return res.status(401).send({ error: 'CPF já cadastrado' })

            const encriptedPassword = hashSync( password, genSaltSync(10) )

            body.password = encriptedPassword

            const user = await User_Schema.create(body)

            const token = Auth.createToken({ _id: user._id })

            return res.status(200).send({
                token,
                result: user
            })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    public listAll = async ( req:User_Request, res:Response ) => {
        try {
            const result = await User_Schema.find()

            return res.status(200).send({ result })
        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public find = async ( query ) => {
        try {
            
            if( !query ) return null

            return await User_Schema.find(query)

        }catch(error){
            return null
        }
    }

    public findById = async ( req:User_Request, res:Response ) => {
        try {
            
            const { id } = req.params

            const result = await User_Schema.findById(id)

            return res.status(200).send({ result })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public update = async ( req:User_Request, res:Response ) => {
        try {
            
            const { id: _id } = req.params

            const result = await User_Schema.updateOne( { _id }, req.body )

            return res.status(200).send({ result })

        }catch(error){

            return res.status(401).send({ error })
        }
    }

    public delete = async  ( req:User_Request, res:Response ) => {
        try {
            
            const { id } = req.params

            const result = await User_Schema.findByIdAndDelete(id)

            return res.status(200).send({ result })

        }catch(error){

            return res.status(401).send({ error })
        }
    }
}

export default new User()