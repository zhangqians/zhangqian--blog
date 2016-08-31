'use strict';
import express from 'express';
import articleApi from './article';
const router=express.Router();
router.use('/article',articleApi);
export default router;
