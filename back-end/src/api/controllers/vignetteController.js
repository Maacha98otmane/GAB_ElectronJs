import User from "../models/user";
import Vignette from "../models/vignette";
const EmailSend = require('../helpers/email')

const saveVignette = async (req) => {

    const newVignette = new Vignette(req);

    try {
      await newVignette.save();
    } catch (err) {
      res.status(500).json(err);
    }
}
const payerVignette = async (req, res) => {
    const vignette = await Vignette.findOne({
        matricule: req.body.matricule
    });
    if (vignette) {
        return res.status(400).json({
            status: false,
            message: "Vignette already payed"
        });
    } else {
        
        try {
            const user = await User.findOne({
                _id: req.params.id
            });
            if (req.body.type === "gasoil") {
                switch (true) {
                    case req.body.fiscal < 8:
                        let amountVignette = 700
                        if (user.amount < amountVignette) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette
                        await user.save()
                        let subj = "Payment Vignette with Success!"
                        let msg = `You have paid the bill of ${amountVignette} DH for a vignette`
                        EmailSend.mail(user.email, subj, msg)
                        await saveVignette(req.body)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    case req.body.fiscal >= 8 && req.body.fiscal <= 10:
                        let amountVignette1 = 1500
                        if (user.amount < amountVignette1) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette1
                        await user.save()
                        let subj1 = "Payment Vignette with Success!"
                        let msg1 = `You have paid the bill of ${amountVignette1} DH for a vignette`
                        EmailSend.mail(user.email, subj1, msg1)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    case req.body.fiscal >= 11 && req.body.fiscal <= 14:
                        let amountVignette2 = 6000
                        if (user.amount < amountVignette2) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette2
                        await user.save()
                        let subj2 = "Payment Vignette with Success!"
                        let msg2 = `You have paid the bill of ${amountVignette2} DH for a vignette`
                        EmailSend.mail(user.email, subj2, msg2)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    case req.body.fiscal >= 15:
                        let amountVignette3 = 20000
                        if (user.amount < amountVignette3) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette3
                        await user.save()
                        let subj3 = "Payment Vignette with Success!"
                        let msg3 = `You have paid the bill of ${amountVignette3} DH for a vignette`
                        EmailSend.mail(user.email, subj3, msg3)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    default:
                        console.log(`Sorry, we are out of ${expr}.`);
                }
            } else {

                switch (true) {
                    case req.body.fiscal < 8:
                        let amountVignette = 350
                        if (user.amount < amountVignette) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette
                        await user.save()
                        let subj = "Payment Vignette with Success!"
                        let msg = `You have paid the bill of ${amountVignette} DH for a vignette`
                        EmailSend.mail(user.email, subj, msg)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    case req.body.fiscal >= 8 && req.body.fiscal <= 10:
                        let amountVignette1 = 650
                        if (user.amount < amountVignette1) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette1
                        await user.save()
                        let subj1 = "Payment Vignette with Success!"
                        let msg1 = `You have paid the bill of ${amountVignette1} DH for a vignette`
                        EmailSend.mail(user.email, subj1, msg1)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    case req.body.fiscal >= 11 && req.body.fiscal <= 14:
                        let amountVignette2 = 3000
                        if (user.amount < amountVignette2) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette2
                        await user.save()
                        let subj2 = "Payment Vignette with Success!"
                        let msg2 = `You have paid the bill of ${amountVignette2} DH for a vignette`
                        EmailSend.mail(user.email, subj2, msg2)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    case req.body.fiscal >= 15:
                        let amountVignette3 = 8000
                        if (user.amount < amountVignette3) {
                            return res.status(400).json({
                                status: false,
                                message: "Not enough money"
                            });
                        }
                        user.amount -= amountVignette3
                        await user.save()
                        let subj3 = "Payment Vignette with Success!"
                        let msg3 = `You have paid the bill of ${amountVignette3} DH for a vignette`
                        EmailSend.mail(user.email, subj3, msg3)
                        return res.status(200).json({
                            status: true,
                            message: "Amount has been deducted"
                        });
                    default:
                        console.log(`Sorry, we are out of ${expr}.`);
                }

            }

        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export {
    payerVignette
};