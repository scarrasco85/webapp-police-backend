const { Police } = require('../models');
const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'maschuloqueunocho');

        const police = await Police.findOne({
            where: {
                token: token
            }
        });
        
        if (!police) {
            return res.status(401).send({
                message: 'No estás autorizado'
            })
        }
        req.police = police;
        next();
    } catch (error) {
        res.status(401).send({
            message: 'No estás autorizado'
        })
    }
}

module.exports = auth;