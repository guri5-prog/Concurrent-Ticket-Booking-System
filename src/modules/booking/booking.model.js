let totalSeats = 100;

export function getRemainingSeats() {
  return totalSeats;
}

export function bookSeat() {
  if (totalSeats <= 0) return false;

  totalSeats -= 1;
  return true;
}