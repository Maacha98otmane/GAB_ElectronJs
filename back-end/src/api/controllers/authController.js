import User from "../models/user.js"
import { createToken } from "../helpers";
const logger = require('../../config/winston');

const login = (req, res) => {
    const {
        fullName,
        code,
        cardNumber
    } = req.body;

    User.findOne({
        fullName
    }, (err, result) => {

        if (err || !result) {
            return res.status(400).json({
                isLogged: false,
                error: 'User not Found with this email@'
            })
        }
        
        if (!result.authenticate(cardNumber)) {
            return res.status(401).json({
                isLogged: false,
                error: 'Card Number and Code dont Match !'
            })
        }
        if(result.code !== code){
            return res.status(401).json({
                isLogged: false,
                error: 'Code is not correct !'
            })
        }
        logger.info(`login: ${result.fullName} logged!`);
        const token = createToken({ id:result._id,amount:result.amount }, "User123");
        res.cookie('token', token, {
            expires: new Date(Date.now() + 4 * 3600000)
        })
        return token
            ? res.status(200).json({ isLogged: true, token })
            : res.status(500).json({ isLogged: false, error: "cant create token" });
    })

}
const logout = (req, res) => {
    res.clearCookie('token');
    res.json({
        message: "Logout"
    })
}
export { login, logout }