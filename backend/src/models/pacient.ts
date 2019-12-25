import { Schema, Document, model } from 'mongoose'

export interface Pacient_Model extends Document {
    dialy: string,
    user: string,
}

const schema = new Schema({
    dialy: {
        type: Schema.Types.ObjectId,
        ref: 'Dialy'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default model<Pacient_Model>('Pacient',schema)