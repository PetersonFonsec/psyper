import { Schema, Document, modal } from 'mongoose'

interface consultation extends Document {

}

const schema  = new Schema({
    psichogist: {
        type: Schema.Types.ObjectId,
        ref: 'psichogist'
    }
})