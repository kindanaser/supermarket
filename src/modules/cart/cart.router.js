import { Router } from "express";
import * as controller from './cart.controller.js'
import {endPoints} from './cart.role.js'
import {auth} from '../../middleware/auth.js'
import { validation } from "../../middleware/validation.js";
import { asyncHandler } from "../../utlis/catchError.js";
import * as schema from "./cart.validation.js";
const router = Router();

router.get('/',auth(endPoints.create),asyncHandler(controller.getAll));
router.post('/',auth(endPoints.create),validation(schema.createCartSchema),asyncHandler(controller.create));
router.put('/remove/:productId',auth(endPoints.create),asyncHandler(controller.remove));
router.put('/clear',auth(endPoints.create),asyncHandler(controller.clear));
router.put('/updateQuantity/:productId',auth(endPoints.create),asyncHandler(controller.updateQuantity));
export default router;