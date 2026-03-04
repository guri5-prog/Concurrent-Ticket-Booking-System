import express from "express";
import { bookSeat } from "./booking.controller.js";

const router = express.Router();

router.post("/book", bookSeat);

export default router;