import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    mobile_number: { type: String, required: true, unique: true },
    user_name: { type: String, required: true, unique: true },
    image: { type: String },
}, { timestamps: true });

export default mongoose.model('UserProfile', userProfileSchema, 'usersProfile');
