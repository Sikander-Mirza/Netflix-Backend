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

const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await AuthModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username }, // Payload
            "hello", // Secret key from environment variable
            { expiresIn: "1h" } // Token expiration time
        );

        // Save the token in the user's document
        user.token = token;
        await user.save();

        // Send the token to the client
        res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({
            error: "Failed to login",
            details: err.message,
        });
    }
};
export default Signin;
