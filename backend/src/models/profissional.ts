import { Schema, Document, model } from 'mongoose'

export interface Profissional_Model extends Document {
    categorie: string,
    CRP: string,
    dia: number,
    description: string,
    pacient: string,
    profissional: string,
    schedule: string
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
    schedule: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

export default model<Profissional_Model>('Profissional',schema)