import mongoose from "mongoose";
const Schema = mongoose.Schema;

const helperSchema = new Schema({
    image: { type: String, required: true },
    mobile_number: { type: String, required: true, unique: true },
    language: { type: String },
    house_number: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin_code: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    about_helper: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Helper', helperSchema, 'helpers');
