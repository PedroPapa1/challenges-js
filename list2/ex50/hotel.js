export class Hotel {
  id;
  name;
  city;
  totalRooms;
  availableRooms;
  reviews = [];

  constructor({ id, name, city, totalRooms }) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.totalRooms = totalRooms;
    this.availableRooms = totalRooms;
  }

  bookRoom() {
    if (this.availableRooms > 0) {
      this.availableRooms -= 1;
    }
  }

  toString() {
    return `"${this.name} [${this.id}]"`;
  }

  vacateRoom() {
    if (this.availableRooms < this.totalRooms) {
      this.availableRooms += 1;
    }
  }
}
