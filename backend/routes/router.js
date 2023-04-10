import partyRouter from './parties.js'
import servicesRouter from './services.js';
import {Router} from 'express'
const router = Router()

router.use("/", servicesRouter);
router.use("/", partyRouter);


export default router;
