import { Schema, Document, model } from 'mongoose'

export enum Profissional_Categorie {
    coach = 'coach',
    psicologo = 'psicologo',
    terapeuta = 'terapeuta',
    psicanalista = 'psicanalista' 
}

export interface Profissional_Model extends Document {
    categorie: Profissional_Categorie,
    CRP: string,
    description: string,
    price: number,
    user: string,
}

const schema = new Schema({
    categorie: {
        type: String,
        require: true
    },
    CRP: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

export default model<Profissional_Model>('Profissional',schema)