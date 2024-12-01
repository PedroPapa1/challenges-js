export function occupancyReport(hotels) {
  console.log("\nOccupancy Report:");

  hotels.forEach((hotel) => {
    const occupiedRooms = hotel.totalRooms - hotel.availableRooms;
    const averageRating =
      hotel.reviews.length > 0
        ? (hotel.reviews.reduce((currentRating, rating) => currentRating + rating) / hotel.reviews.length).toFixed(2)
        : "No reviews yet";

    console.log(`Hotel: ${hotel.toString()}`);
    console.log(`- Occupied Rooms: ${occupiedRooms}`);
    console.log(`- Available Rooms: ${hotel.availableRooms}`);
    console.log(`- Total Rooms: ${hotel.totalRooms}`);
    console.log(`- Average ratings: ${averageRating}`);
  });
}
