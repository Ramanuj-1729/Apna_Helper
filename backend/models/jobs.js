import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    minBudget: { type: Number, required: true },
    maxBudget: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Job', jobsSchema, 'jobs');
