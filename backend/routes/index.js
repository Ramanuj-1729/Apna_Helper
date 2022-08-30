import express from 'express';
const router = express.Router();
import { customerRegisterController } from '../controllers';
import { helperRegisterController } from '../controllers';

router.post('/helper/register', helperRegisterController.register);
router.post('/customer/register', customerRegisterController.register);

export default router;