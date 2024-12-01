import promptSync from "prompt-sync";
const prompt = promptSync();

export function checkOut(hotels, reservations) {
  console.log("\nInsert the reserve id to check out.");
  const reservationId = parseInt(prompt(">"));
  const foundReservation = reservations.find((reservation) => reservation.reservationId === reservationId);

  if (foundReservation && foundReservation.checkOut()) {
    const findingHotel = hotels.find((hotel) => hotel.id === foundReservation.reservationId);
    if (findingHotel) {
      findingHotel.vacateRoom();
      console.log(`- Check out reservation id: [${reservationId}] successful`);
    }
  } else {
    console.log(`FAILED! Reservation id: [${reservationId}] could not be check out.`);
  }
}
