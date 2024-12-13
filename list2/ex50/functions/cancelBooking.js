import promptSync from "prompt-sync";
const prompt = promptSync();

export function cancelBooking(hotels, reservations) {
  console.log("\nInsert the reservation id to cancel.");
  const reservationId = parseInt(prompt(">"));

  const reservationIndex = reservations.findIndex((reservation) => reservation.reservationId === reservationId);

  if (reservationIndex >= 0) {
    const [deletedReservation] = reservations.splice(reservationIndex, 1);
    const hotelIndex = hotels.findIndex((hotel) => hotel.id === deletedReservation.hotelId);
    if (hotelIndex >= 0) {
      hotels[hotelIndex].vacateRoom();
      console.log(`- Reservation ${reservationId} has been canceled at Hotel ${hotels[hotelIndex].toString()}.`);
    }
  } else {
    console.log(`FAILED! Reservation id: [${reservationId}] not found in system.`);
  }
}
