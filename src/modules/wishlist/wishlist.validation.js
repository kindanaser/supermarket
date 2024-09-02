import Joi from "joi";

export const createListSchema = Joi.object({
    productId:Joi.string().hex().length(24),
});