import { Schema, model, Document } from "mongoose"

interface Schedule_Model extends Document {
    profissional: string,
    dayOfWeek: number,
    hour: number
}

const schema = new Schema({
    profissional: {
        type: Schema.Types.ObjectId,
        ref: 'Profissional'
    },
    dayOfWeek: {
        type: Number,
        required: true
    },
    hour: {
        type: Number,
        required: true
    },
})

export default model<Schedule_Model>("Schedule",schema)