import express from 'express';
import * as receiverCtrl from '../Controller/receiver.controller.js'; 
const router = express.Router();
router.post('/', receiverCtrl.createReceiver);

export default router;