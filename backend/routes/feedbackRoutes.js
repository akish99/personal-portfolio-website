// import { Router } from 'express'; import { createFeedback,listApproved } from '../controllers/feedbackController.js';
// const router=Router(); router.get('/approved',listApproved); router.post('/',createFeedback); export default router;


import { Router } from 'express';
import { createFeedback, listApproved } from '../controllers/feedbackController.js';

const router = Router();
router.get('/approved', listApproved);
router.post('/', createFeedback);

export default router;