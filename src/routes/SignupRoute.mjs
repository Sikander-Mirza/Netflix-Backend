import Signin from "../controllers/AuthController.mjs";

const SignupRoutes = (app) => {
    app.post("/signup", Signin); // Route for signup
};

export default SignupRoutes;
