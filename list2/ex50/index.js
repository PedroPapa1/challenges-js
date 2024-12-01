import { createHotel } from "./functions/createHotel.js";
import { hotelByCity } from "./functions/hotelByCity.js";
import { booking } from "./functions/booking.js";
import { cancelBooking } from "./functions/cancelBooking.js";
import { bookingList } from "./functions/bookingList.js";
import { checkIn } from "./functions/checkIn.js";
import { checkOut } from "./functions/checkOut.js";
import { reviewForHotel } from "./functions/reviewForHotel.js";
import { occupancyReport } from "./functions/occupancyReport.js";
import { displayMenu } from "./functions/displayMenu.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

const hotels = [];
const reservations = [];

const menu = {
  [0]: () => {
    console.log("Exiting the program.");
    process.exit();
  },
  [1]: () => {
    const hotel = createHotel();
    hotels.push(hotel);
    console.log(`Hotel ${hotel.toString()} has been successfully added.`);
  },
  [2]: () => hotelByCity(hotels),
  [3]: () => booking(hotels, reservations),
  [4]: () => cancelBooking(hotels, reservations),
  [5]: () => bookingList(hotels, reservations),
  [6]: () => checkIn(reservations),
  [7]: () => checkOut(hotels, reservations),
  [8]: () => reviewForHotel(hotels),
  [9]: () => occupancyReport(hotels),
};

export function executeOpition() {
  let option;

  do {
    displayMenu();
    console.log("\nInsert an integer number to choose an option.");
    option = parseInt(prompt(">"));

    if (option >= 0 && option <= 9) {
      menu[option]();
    } else {
      console.log("Please insert a valid option.");
      return;
    }
  } while (option !== 0);
}
executeOpition();
