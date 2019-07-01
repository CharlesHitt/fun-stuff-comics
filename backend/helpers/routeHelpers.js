const Joi = require('joi')

module.exports = {
    validateParam: (schema, name) => {
        return (req,res,next)=>{
            const result = Joi.validate({ param: req['params'][name]}, schema)
            if(result.error){
                return res.status(400).json(result.error)
            } else {
                if(!req.value)
                    req.value = {}
                if(!req.value['params'])
                    req.value['params'] = {}
                req.value['params'][name] = result.value.param
                next()
            }
        }
    },

    validateBody: (schema) => {
        return (req,res,next)=>{
            const result = Joi.validate(req.body, schema)
            if (result.error){
                return res.status(400).json(result.error)
            } else {
                if(!req.value)
                    req.value = {}
                if(!req.value['body'])
                    req.value['body'] = {}
                req.value['body'] = result.value
                next()
            }
        }
    },


    schemas:{
        customerSchema: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            phoneNumber: Joi.number().required(),
            email: Joi.string().email().required()
        }),

        customerOptionalSchema: Joi.object().keys({
            firstName: Joi.string(),
            lastName: Joi.string(),
            phoneNumber: Joi.number(),
            email: Joi.string().email()
        }),

        customerComicSchema: Joi.object().keys({
            title: Joi.string().required(),
            issue: Joi.number(),
            mainCharacters: Joi.string(),
            publisher: Joi.string(),
            writers: Joi.string(),
            artists: Joi.string(),
            releaseDate: Joi.number(),
            numberOfPages: Joi.number(),
            maturityLevel: Joi.string(),
            genre: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            image_url: Joi.string()
        }),

        comicSchema: Joi.object().keys({
            sub: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            title: Joi.string().required(),
            issue: Joi.number(),
            mainCharacters: Joi.string(),
            publisher: Joi.string(),
            writers: Joi.string(),
            artists: Joi.string(),
            releaseDate: Joi.number(),
            numberOfPages: Joi.number(),
            maturityLevel: Joi.string(),
            genre: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            image_url: Joi.string()
        }),

        putComicSchema: Joi.object().keys({
            title: Joi.string().required(),
            issue: Joi.number(),
            mainCharacters: Joi.string(),
            publisher: Joi.string(),
            writers: Joi.string(),
            artists: Joi.string(),
            releaseDate: Joi.number(),
            numberOfPages: Joi.number(),
            maturityLevel: Joi.string(),
            genre: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            image_url: Joi.string()
        }),

        patchComicSchema: Joi.object().keys({
            title: Joi.string().required(),
            issue: Joi.number(),
            mainCharacters: Joi.string(),
            publisher: Joi.string(),
            writers: Joi.string(),
            artists: Joi.string(),
            releaseDate: Joi.number(),
            numberOfPages: Joi.number(),
            maturityLevel: Joi.string(),
            genre: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            image_url: Joi.string()
        }),


        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
}
