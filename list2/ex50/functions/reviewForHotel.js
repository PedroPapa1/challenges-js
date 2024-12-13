import promptSync from "prompt-sync";
const prompt = promptSync();

export function reviewForHotel(hotels) {
  console.log("\nInsert the hotel id to review.");
  const reviewId = parseInt(prompt(">"));

  console.log("\nRating the hotel [1 (worse) to 5 (better)]:");
  const rating = parseFloat(prompt(">"));

  const findingHotel = hotels.find((hotel) => hotel.id === reviewId);

  if (!findingHotel) {
    console.log(`FAILED! Hotel id: ${reviewId} not found in system`);
    return;
  }

  findingHotel.reviews.push(rating);
  console.log(`- Review added for Hotel ${findingHotel.toString()} with rating: ${rating}`);
}
