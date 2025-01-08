import auth from "../controllers/AuthController.mjs";

const SignupRoutes = (app) => {
    app.post("/signup", auth.Signin); // Route for signup
    app.post("/login",auth.Login);
};

export default SignupRoutes;
