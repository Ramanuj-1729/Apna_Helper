import Joi from 'joi';
import { Jobs } from '../models';

const jobsController = {
    async postJobs(req, res, next) {
        const jobsSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            minBudget: Joi.string().required(),
            maxBudget: Joi.string().required(),
        });
        const { error } = jobsSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { title, description, minBudget, maxBudget } = req.body;

        // prepare the model
        const job = new Jobs({
            title,
            description,
            minBudget,
            maxBudget
        });

        try {
            const result = await job.save();
        } catch (err) {
            return next(err);
        }

        res.json(job);
    }
}


export default jobsController;