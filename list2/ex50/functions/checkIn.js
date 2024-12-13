import promptSync from "prompt-sync";
const prompt = promptSync();

export function checkIn(reservations) {
  console.log("\nInsert the reserve id to check in.");
  const reservationId = parseInt(prompt(">"));
  const foundReservation = reservations.find((reservation) => reservation.reservationId === reservationId);

  if (foundReservation && foundReservation.checkIn()) {
    console.log(`- Check in reservation id: [${reservationId}] successful`);
  } else {
    console.log(`FAILED! Reservation id: [${reservationId}] could not be check in.`);
  }
}
