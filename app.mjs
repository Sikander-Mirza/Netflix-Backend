import express from "express";
import connectDB from "./src/infrastructure/db.mjs";
import SignupRoutes from "./src/routes/SignupRoute.mjs";

const app = express();
const port = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Initialize Routes
SignupRoutes(app);

// Database Connection and Server Start
connectDB()
    .then(() => {
        console.log("Database Connected");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Database Connection Failed:", err.message);
    });

// Default Route
app.get("/", (req, res) => {
    res.send("Hello World");
});
