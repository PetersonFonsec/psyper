import { Schema, Document, model } from 'mongoose'

interface User_Model extends Document {
    name ?: String,
    avatar ?: String,
    password ?: String,
    email ?: String
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
    password:{
        type: String,
        select: false,
        required: true
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
    telephone:{
        type: String,
        unique: true,
    },
    psichologist:{
        type: Boolean,
        unique: true,
        required: true
    }
})

export default model<User_Model>('User', schema)