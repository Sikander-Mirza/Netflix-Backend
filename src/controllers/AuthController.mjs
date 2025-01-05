import AuthModel from "../models/SignupModel.mjs";

const Signin = async (req, res) => {
    const data = req.body;

    try {
        // Insert a single document
        const result = await AuthModel.create(data);
        res.status(201).json({
            message: "User signed up successfully",
            data: result,
        });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({
            error: "Failed to sign up",
            details: err.message,
        });
    }
};

export default Signin;
