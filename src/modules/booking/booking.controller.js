import { bookSeatService } from "./booking.service.js";

export async function bookSeat(req, res) {
  const result = await bookSeatService();
  res.status(result.status).json(result.body);
}