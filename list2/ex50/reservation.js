export class Reservation {
  reservationId;
  hotelId;
  customerName;
  status = "booked"; //booked, checkin, checkout

  constructor({ reservationId, hotelId, customerName }) {
    this.reservationId = reservationId;
    this.hotelId = hotelId;
    this.customerName = customerName;
  }

  checkIn() {
    if (this.status === "booked") {
      this.status = "checkIn";
      return true;
    }
    return false;
  }

  checkOut() {
    if (this.status === "checkIn") {
      this.status = "checkOut";
      return true;
    }
    return false;
  }

  toString() {
    return `Reservation: ${this.reservationId} - Customer: ${this.customerName}`;
  }
}
