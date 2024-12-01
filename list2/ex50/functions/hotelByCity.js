import promptSync from "prompt-sync";
const prompt = promptSync();

export function hotelByCity(hotels) {
  console.log("\nInsert the name of the city, so we can find your hotel.");
  const city = prompt(">");

  const searchingHotel = hotels.filter((hotel) => hotel.city.toLowerCase() === city.toLowerCase());

  if (searchingHotel.length > 0) {
    console.log(`\nAvailable hotels in ${city}:`);
    searchingHotel.forEach((hotel) => {
      console.log(`- Hotel ${hotel.toString()} have ${hotel.availableRooms} available rooms.`);
    });
  } else {
    console.log(`We don't have any hotels in ${city}.`);
  }
}
