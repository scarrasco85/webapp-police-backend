const { Police } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = {
    async login(req, res) {
        try {
            const police = await Police.findOne({
                where: {
                    numPlaca: req.body.numPlaca
                }
            })

            if (!police) {
                return res.status(400).send({
                    message: 'El número de placa introducido no existe'
                });
            }

            /* if (!password) {
                return res.status(400).send({
                    message: 'La contraseña introducida no es correcta'
                });
            } */

            const token = jwt.sign({ numPlaca: police.numPlaca }, 'maschuloqueunocho', {expiresIn: '30d'});
            police.token = token;
            await police.save();
            res.status(200).send({
                message: 'Sesión iniciada correctamente',
                police
            })

        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar inicar sesión',
                error
            })
        }
    }
}

module.exports = Login;