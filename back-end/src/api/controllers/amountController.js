import User from "../models/user";


const getAmount = async (req, res) => {

  try {

    const user = await User.findOne({
        _id: req.params.id
    }, {
        amount: 1
    });
    res.status(200).json({
        status: true,
        user
    });
  } catch (err) {
    res.status(500).json(err);
  }
    
}

const minusAmount = async (req, res) => {
    try {
        const amount = await User.findOne({
            _id: req.params.id
        });
        if (amount.amount < req.body.amount) {
            return res.status(400).json({
                status: false,
                message: "Not enough money"
            });
        }
        amount.amount -= req.body.amount;
        await amount.save();
        res.status(200).json({
            status: true,
            message: "Amount has been deducted"
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

export { getAmount,minusAmount };