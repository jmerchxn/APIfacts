import Joi from "joi";

export const userValidation = (data) =>{
    const Schema = Joi.object({
        title: Joi.string().min(3).required(),
    })
}