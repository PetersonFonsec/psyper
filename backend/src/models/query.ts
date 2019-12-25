import { Schema, Document, model } from 'mongoose'

export interface Query_Model extends Document {
    day: Number,
    duration: Number
    hour: Number,
    month: Number,
    patient: string,
    profissional: string,
    years: Number,
}

const schema = new Schema({
    profissional: {
        type: Schema.Types.ObjectId,
        ref: 'Profissional'
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    day: {
        type: Number,
        require: true
    },
    month: {
        type: Number,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    hour: {
        type: Number,
        require: true
    },
    duration: {
        type: Number,
        require: true
    }
})

export default model<Query_Model>('Query',schema)