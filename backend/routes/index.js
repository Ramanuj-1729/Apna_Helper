import express from 'express';
const router = express.Router();
import { signupController, loginController, userController, refreshController, helperController, customerController, userProfileController } from '../controllers';
import auth from '../middlewares/auth';

router.post('/signup', signupController.signup);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);
router.post('/helper', helperController.info);
router.post('/customer', customerController.info);
router.post('/userProfile', userProfileController.info);

export default router;