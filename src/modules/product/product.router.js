import { Router } from "express";
import * as controller from './product.controller.js'
import {endPoints} from './product.role.js'
import fileUpload, { fileTypes } from "../../utlis/multer.js";
import {auth} from '../../middleware/auth.js'
import { asyncHandler } from "../../utlis/catchError.js";
import { validation } from "../../middleware/validation.js";
import * as schema from "./product.validation.js";
const router = Router();

router.get('/', controller.getProducts);
router.post('/',auth(endPoints.create),fileUpload(fileTypes.image).fields([
    {name:'image', maxCount:1},
    {name:'subImages', maxCount:5},
]),validation(schema.createProductSchema),asyncHandler(controller.create));

export default router;