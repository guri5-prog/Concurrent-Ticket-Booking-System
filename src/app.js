import express from "express";
import bookingRoutes from "./modules/booking/booking.route.js";

const app = express();

app.use(express.json());
app.use("/api", bookingRoutes);

app.get("/", (req, res) => {
  res.redirect("/api/book");
});

export default app;