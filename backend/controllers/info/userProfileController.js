import Joi from 'joi';
import UserProfile from '../../models/userProfile';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import CustomErrorHandler from '../../services/CustomErrorHandler';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/user'),
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
}).single('profile_picture');

const userProfileController = {
    async info(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            const filePath = req.file.path;

            const userProfileSchema = Joi.object({
                // mobile_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
                user_name: Joi.string().required(),
                full_name: Joi.string().required(),
                phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
                pincode: Joi.string().length(6).required(),
                house_number: Joi.string().required(),
                area: Joi.string().required(),
                state: Joi.string().required(),
                landmark: Joi.string(),
            });
            const { error } = userProfileSchema.validate(req.body);
            if (error) {
                // delete the uploded image
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(error);
            }

            const { /*mobile_number,*/ user_name, full_name, phone_number, pincode, house_number, area, state, landmark } = req.body;
            let userProfileDocument;

            try {
                userProfileDocument = await UserProfile.create({
                    profile_picture: filePath,
                    // mobile_number,
                    user_name,
                    full_name,
                    phone_number,
                    pincode,
                    house_number,
                    area,
                    state,
                    landmark
                });

            } catch (err) {
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(err);
            }


            res.status(201).json(userProfileDocument);
        });
    }
}

export default userProfileController;