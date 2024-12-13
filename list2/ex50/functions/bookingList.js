export function bookingList(hotels, reservations) {
  if (reservations.length > 0) {
    reservations.forEach((reservation) => {
      const foundHotel = hotels.find((hotel) => hotel.id === reservation.hotelId);
      if (foundHotel) {
        console.log(`${reservation.toString()} - Hotel: ${foundHotel.toString()} - Status: ${reservation.status}`);
      }
    });
  } else {
    console.log("There aren't reservations in the system.");
  }
}
