import {Schema, model} from "mongoose";
import { randomUUID } from 'crypto'

const serviceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
}, {timestamps: true});

const Service = model("Service", serviceSchema);

export default Service