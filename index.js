import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import messages from "./db/dbMessages.js";

import newRouter from "./routes/newRoute.js";
import messageRouter from "./routes/messageRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages });
});

app.use("/new", newRouter);

app.use(messageRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
