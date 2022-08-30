import Joi from "joi"; // for validate the request
import { CustomErrorHandler } from "../../../services";
import { User } from '../../../models';
import bcrypt from 'bcrypt';
import { JwtService } from '../../../services';
const customerRegisterController = {
    async register(req, res, next) {
        // checklist
        // validate the request
        // authorise the request
        // check if user is in the database already
        // prepare model
        // store in database
        // generate jwt token
        // send response
        const customerRegisterSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password')
        })

        const { error } = customerRegisterSchema.validate(req.body);

        if (error) {
            return next(error);
        }


        try {
            const exist = await User.exists({ email: req.body.email });
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This email is already taken.'));
            }
        } catch (err) {
            return next(err);
        }

        const { name, email, password } = req.body;
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Prepare the model
        
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        let access_token;
        try {
            const result = await user.save();

            // Token
            access_token = JwtService.sign({ _id: result._id, role: result.role });
        } catch (err) {
            return next(err)
        }


        res.json({ access_token });
    }
}

export default customerRegisterController;