import { Router } from 'express';
import { register } from '../controllers';

const router = Router();

router.route('/register').post(register);

export { router as routes };
