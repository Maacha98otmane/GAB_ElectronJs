import User from "../models/user";
const EmailSend = require('../helpers/email')

const payerRecharge = async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        if (user.amount < req.body.amount) {
            return res.status(400).json({
                status: false,
                message: "Not enough money"
            });
        }
        user.amount -= req.body.amount;
        await user.save();
        let subj = "Recharge Telephone with Success!";
        let msg = `You have paid ${req.body.amount} DH for the telephone number ${req.body.number} operator ${req.body.operator}`;
        EmailSend.mail(user.email, subj, msg)
        res.status(200).json({
            status: true,
            message: "Amount has been deducted"
        });

       
       
    } catch (err) {
        res.status(500).json(err);
    }
}

export { payerRecharge };