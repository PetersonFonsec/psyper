import { Schema, Document, model } from 'mongoose'

interface Consultatiton extends Document {
    psichologist: String,
    patient: String,
    day: Number,
    month: Number,
    years: Number,
    hour: Number,
    duration: Number
}

const schema = new Schema({
    psichologist: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    day: {
        type: Number,
        require: true
    },
    month: {
        type: Number,
        require: true
    },
    years: {
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

export default model<Consultatiton>('Consultatiton',schema)