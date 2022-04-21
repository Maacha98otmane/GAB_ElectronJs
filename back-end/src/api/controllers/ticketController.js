import User from "../models/user";
import {
    getDistance
} from "../helpers/distanceProvider";
const EmailSend = require('../helpers/email')


const findVoyage = async (req, res) => {

    let distance = await getDistance(req.body.from, req.body.to);
    let price = distance * 0.5;
    let voyage = {
        Km : distance,
        Prix :price,
        From : req.body.from,
        To : req.body.to
    }
    res.status(200).json({
        status: true,
        voyage
    });
};
const payerVoyage = async (req, res) => {

    let distance = await getDistance(req.body.from, req.body.to);
    let price = distance * 0.5;
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        if (user.amount < price) {
            return res.status(400).json({
                status: false,
                message: "Not enough money"
            });
        }
        user.amount -= price;
        await user.save();
        let subj = "Payment Voyage with Success!";
        let msg = `You have paid the bill of ${price} DH for a voyage from ${req.body.from} to ${req.body.to}`;
        EmailSend.mail(user.email, subj, msg)
        res.status(200).json({
            status: true,
            message: "Amount has been deducted"
        });
    } catch (err) {
        res.status(500).json(err);
    }
  
};

export { findVoyage,payerVoyage };