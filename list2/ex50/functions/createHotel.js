import { Hotel } from "../hotel.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export function createHotel() {
  console.log("\nInsert the hotel id:");
  const id = parseInt(prompt(">"));

  console.log("\nInsert the hotel name:");
  const name = prompt(">");

  console.log("\nInsert the city of the hotel:");
  const city = prompt(">");

  console.log("\nInsert the number of rooms:");
  const totalRooms = parseInt(prompt(">"));

  return new Hotel({ id, name, city, totalRooms });
}
