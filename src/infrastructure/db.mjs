import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sikandersunny2017:ywFTVMUfxmbyUzKi@cluster0.qpf0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000
            });
            console.log("MongoDB Connected: ");
                } catch (err) {
                    console.error(err.message);
                    
                    }
                    };
export default connectDB;
