import express from "express";
import messages from "../db/dbMessages.js";

const router = express.Router();

router.get("/:id", (req, res) => {
	const { id } = req.params;
	console.log(req.params);
	console.log("ID: ", id);
	const message = messages.find((message) => message.id == id);
	res.render("message", { message });
});

export default router;
