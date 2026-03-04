import { acquireLock, releaseLock } from "../../utils/lock.util.js";
import { v4 as uuidv4 } from 'uuid';

export async function bookSeatService() {
  const lockKey = "lock:booking";
  const lockToken = uuidv4();

  const lockAcquired = await acquireLock(lockKey, lockToken);

  if (!lockAcquired) {
    return {
      status: 423,
      body: { success: false, message: "System busy. Try again." }
    };
  }

  try {
    const { bookSeat, getRemainingSeats } = await import("./booking.model.js");

    const booked = bookSeat();

    if (!booked) {
      return {
        status: 400,
        body: { success: false, message: "No seats available" }
      };
    }

    return {
      status: 200,
      body: {
        success: true,
        bookingId: Date.now(),
        remaining: getRemainingSeats()
      }
    };

  } finally {
    await releaseLock(lockKey, lockToken);
  }
}