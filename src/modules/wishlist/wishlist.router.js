import { Router } from "express";
import * as controller from './wishlist.controller.js'
import {endPoints} from './wishlist.role.js'
import {auth} from '../../middleware/auth.js'
import { validation } from "../../middleware/validation.js";
import * as schema from "./wishlist.validation.js";
import { asyncHandler } from "../../utlis/catchError.js";
const router = Router();

router.get('/',auth(endPoints.create),asyncHandler(controller.getAll));
router.post('/',auth(endPoints.create),validation(schema.createListSchema),asyncHandler(controller.create));
router.put('/remove/:productId',auth(endPoints.create),asyncHandler(controller.remove));
router.put('/clear',auth(endPoints.create),asyncHandler(controller.clear));
export default router;