import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    image: { type: String },
    mobile_number: { type: String, required: true, unique: true },
    house_number: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin_code: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Customer', customerSchema, 'customers');
