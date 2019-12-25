import { Schema, Document, model } from 'mongoose'

export interface Dialy_Model extends Document {
    content: string,
    profissional: string,
    user: string,
}

const schema = new Schema({
    content: {
        type: String,
        requried: true
    },
    profissional: {
        type: Schema.Types.ObjectId,
        ref: 'Profissional'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default model<Dialy_Model>('Dialy',schema)