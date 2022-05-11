const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            name: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{2,32}$')
            )
        })

        const {error, value} = schema.validate(req.body)

        if(error){
            switch(error.details[0].context.key){
            case'email':
                res.status(400).send({
                    error:'Please provide a valid email address'
                })
                break
            case 'password':
                res.status(400).send({
                    error: `Your password must follow these rules: <br>
                    1: Only a-z A-Z 0-9 are allowed as valid characters <br>
                    2: Minimum length of 8 characters <br>
                    3: Maximum length of 32 characters`
                })
                break
                case'name':
                res.status(400).send({
                    error:'Your name must be atleast 2 characters long and only contain A-Z'
                })
                break
            default:
                res.status(400).send({
                    error: 'Registration info is invalid'
                })
            }
        }else{
            next()
        }
    }
}