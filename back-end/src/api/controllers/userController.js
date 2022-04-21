import User from "../models/user";


const addUser = async (req, res) => {

    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        savedUser.password = undefined;
        savedUser.salt = undefined;
        res.status(200).json({
            status: true,
            savedUser
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

export { addUser };