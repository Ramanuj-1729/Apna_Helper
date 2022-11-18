import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    // mobile_number: { type: String, required: true, unique: true },
    user_name: { type: String, required: true, unique: true },
    profile_picture: { type: String },
    full_name: { type: String, required: true },
    phone_number: { type: String, required: true, unique: true },
    pincode: { type: String, required: true, unique: true },
    house_number: { type: String, required: true },
    area: { type: String, required: true },
    state: { type: String, required: true },
    landmark: { type: String },

}, { timestamps: true });

export default mongoose.model('UserProfile', userProfileSchema, 'usersProfile');
