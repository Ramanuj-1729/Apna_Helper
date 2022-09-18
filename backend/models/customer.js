import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    mobile_number: { type: Number, required: true, unique: true },
    address: {
        house_number: Number,
        street: String,
        city: { type: String, required: true },
        state: { type: String, required: true },
        pin_code: { type: Number, required: true }
    }
}, { timestamps: true });

export default mongoose.model('Customer', customerSchema, 'customers');