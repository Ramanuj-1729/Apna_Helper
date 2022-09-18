import express from 'express';
const router = express.Router();
import { registerController, loginController, userController, refreshController, helperController, customerController } from '../controllers';
import auth from '../middlewares/auth';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);
router.post('/helper', helperController.info);
router.post('/customer', customerController.info);

export default router;