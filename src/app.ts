import express from "express";
import cors from "cors";
import routes from "./lib/routes";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running!" });
});
app.use("/api/v1", routes)

export default app;