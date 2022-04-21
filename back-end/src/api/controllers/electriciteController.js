import User from "../models/user";
import Electricite from "../models/electricite";
const EmailSend = require('../helpers/email')

const createElectricite = async (req, res) => {

    const newElectricite = new Electricite(req.body);

    try {
      const savedElectricite = await newElectricite.save();
      res.status(200).json(savedElectricite);
    } catch (err) {
      res.status(500).json(err);
    }
}

const getElectricite = async (req, res) => {

  try {
    const electricite = await Electricite.findOne({
        serial: req.body.serial
    });
    res.status(200).json({
        status: true,
        electricite
    });
  } catch (err) {
    res.status(500).json(err);
  }
    
}

const payer = async (req, res) => {
    try {
        const electricite = await Electricite.findOne({
            _id: req.params.id
        });
        if(electricite.status===false){
            const user = await User.findOne({
                _id: req.body.userId
            });
            if (user.amount < electricite.amount) {
                return res.status(400).json({
                    status: false,
                    message: "Not enough money"
                });
            }
            user.amount -= electricite.amount;
            await user.save();
            electricite.status=true;
            await electricite.save();
            let subj = "Payment Eau & Electricite with Success!";
            let msg = `You have paid the bill of ${electricite.amount} DH for the serial number ${electricite.serial}`;
            EmailSend.mail(user.email, subj, msg)
            res.status(200).json({
                status: true,
                message: "Amount has been deducted"
            });
        }else{
            res.status(400).json({
                status: false,
                message: "This bill has already been paid"
            });
        }
       
    } catch (err) {
        res.status(500).json(err);
    }
}

export { createElectricite,getElectricite,payer };