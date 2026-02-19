import express from "express";
import cors from "cors";
import routes from "./lib/routes";
const app = express();
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running!" });
});
app.use("/api/v1", routes)

export default app;