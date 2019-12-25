import { Request, Response, NextFunction } from 'express'
import { sign, Secret, SignOptions, verify } from 'jsonwebtoken'
import { compareSync } from 'bcryptjs'
import User_Schema, { User_Model } from '../models/user'

export interface User_Logged extends User_Model {
    result: User_Model
    token: string
}

export interface Auth_Request extends Request {
    userId: string
    headers: {
        authorization: string;
    }
}

class Auth {

    private expiresToken:SignOptions = { 
        expiresIn: 10800000  // 3 hours
    }
   
    private secret:Secret = process.env.AUTH_SECRET

    public createToken( payload:string | object ): string {
        return sign(payload, this.secret, this.expiresToken)
    }

    public validToken = ( req:Auth_Request, res:Response, next:NextFunction ) => {
        
        const { authorization } = req.headers

        if( !authorization )
            return res.status(401).send({ error: 'Token não enviado' })

        const parts = authorization.split(' ')

        if( parts.length !== 2 )
            return res.status(401).send({ error: 'Token não enviado' })

        try {
            
            const [ Bearer, Token ] = parts

            if( 'Bearer' !== Bearer.trim() ) 
                return res.status(401).send({ error: 'Token inválido' })   
            
                verify(Token, this.secret,(error:Error, decoded:User_Model ) => {
                
                    if(error) return res.status(401).send({ error })
    
                    req.userId = decoded._id
                    
                    next()
                })

        }catch(error){
            return res.status(401).send({ error })
        }
    }

    public login = async ( req:Auth_Request, res:Response) => {
        
        const { password, email } = req.body

        if( !password ) return res.status(401).send({ error: 'Senha não informada' })

        if( !email ) return res.status(401).send({ error: 'Email não informado' })

        try {

            const userExist = await User_Schema.findOne({ email }).select('+password')

            if( !userExist ) 
                return res.status(401).send({ error: 'Usuário não encontrado' })

            const passwordValid = compareSync( password, `${userExist.password}` )

            if( !passwordValid )
                return res.status(401).send({ error: 'Senha invalida' })
            
            const { _id: id } = userExist

            const token = this.createToken({ id })

            delete userExist.password

            return res.status(200).send({ 
                token,
                result: { 
                    ...userExist
                }
            })

        } catch (error) {
            return res.status(401).send({ error })
        }
    }

}

export default new Auth()
