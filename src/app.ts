import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.route";
const app = express();
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running!" });
});
app.use(userRouter)

export default app;