import Joi from 'joi';
import Customer from '../../models/customer';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CustomErrorHandler from '../../services/CustomErrorHandler';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/customer'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
}).single('image');

const customerController = {
    async info(req, res, next) {
        handleMultipartData(req, res, async(err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            const filePath = req.file.path;

            const customerSchema = Joi.object({
                mobile_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
                house_number: Joi.number().required(),
                street: Joi.string().required(),
                city: Joi.string().min(3).max(30).required(),
                state: Joi.string().min(3).max(20).required(),
                pin_code: Joi.string().length(6).required()
            });
            const { error } = customerSchema.validate(req.body);
            if (error) {
                // delete the uploded image
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if(err){
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(error);
            }

            const { mobile_number, house_number, street, city, state, pin_code } = req.body;
            let customerDocument;

            try {
                customerDocument = await Customer.create({
                    image: filePath,
                    mobile_number,
                    house_number,
                    street,
                    city,
                    state,
                    pin_code
                });
            } catch (err) {
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if(err){
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(err);
            }


            res.status(201).json(customerDocument);
        });
    }
}

export default customerController;