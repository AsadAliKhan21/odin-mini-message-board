import express from "express";
import messages from "../db/dbMessages.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.render("form");
});

router.post("/", (req, res) => {
	const { name, message } = req.body;
	console.log(`Name: ${name}, Message: ${message}`);
	messages.push({
		id: messages.at(-1).id + 1,
		text: message,
		user: name,
		added: new Date(),
	});

	res.redirect("/");
});

export default router;
