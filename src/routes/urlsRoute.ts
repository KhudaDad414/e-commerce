import { Router } from 'express';
import {getUrls, postUrls} from '../controllers/urlsController';

const router = Router();

router.get("/:shortHand", getUrls)

router.post("/", postUrls)

export default router;
