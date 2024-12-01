import { Reservation } from "../reservation.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export function booking(hotels, reservations) {
  console.log("\nInsert the hotel id for the reservation");
  const hotelId = parseInt(prompt(">"));

  console.log("\nInsert your name for the reservation");
  const customerName = prompt(">");

  const hotel = hotels.find((hotel) => hotel.id === hotelId);

  if (!hotel) {
    console.log(`- No hotel was found with the id: ${hotelId}`);
    return;
  }

  if (hotel.availableRooms > 0) {
    const reservationId = reservations.length + 1;
    const reservation = new Reservation({ reservationId, hotelId, customerName });

    reservations.push(reservation);
    hotel.bookRoom();
    console.log(`- Reservation confirmed for ${customerName} at Hotel ${hotel.toString()}.`);
  } else {
    console.log(`- At the moment we don't have available rooms at Hotel ${hotel.toString()}.`);
  }
}
