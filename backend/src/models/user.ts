import { Schema, Document, model } from 'mongoose'

export interface User_Model extends Document {
    avatar ?: string,
    cpf : string,
    name : string,
    email : string,
    password : string,
    telephone: string
}

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: 'avatar-default'
    },
    cpf:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        select: false,
        required: true
    },
    telephone:{
        type: String,
        unique: true,
    }
})

export default model<User_Model>('User', schema)