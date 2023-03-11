import { Component } from '@angular/core';
import { Room, RoomList } from './rooms'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = "PICADLLY";
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Delux Room',
    amenities: 'Air Conditioner ,Free WIFI, TV, Bathroom, Kitchen',
    price: 500,
    photos: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
    checkinTime: new Date('11-Nov-2022'),
    checkoutTime: new Date('14-Nov-2022')
  },
  {
    roomNumber: 2,
    roomType: 'General Room',
    amenities: 'Free WIFI, TV, Bathroom, Kitchen',
    price: 200,
    photos: 'shorturl.at/lGMW7',
    checkinTime: new Date('15-Nov-2022'),
    checkoutTime: new Date('28-Nov-2022')
  },
  {
    roomNumber: 3,
    roomType: 'super Delux Room',
    amenities: 'AC, BathTub, Free WIFI, TV, Bathroom, Kitchen',
    price: 200,
    photos: 'shorturl.at/douyF',
    checkinTime: new Date('15-Nov-2022'),
    checkoutTime: new Date('28-Nov-2022')
  }]
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

