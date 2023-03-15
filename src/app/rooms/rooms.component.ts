import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = "PICADiLLY";
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title = 'Room List';
  roomList: RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor() {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  ngOnInit(): void {
    //console.log(this.headerComponent)
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner ,Free WIFI, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('14-Nov-2022'),
      rating: 4.2
    },
    {
      roomNumber: 2,
      roomType: 'General Room',
      amenities: 'Free WIFI, TV, Bathroom, Kitchen',
      price: 200,
      photos: 'shorturl.at/lGMW7',
      checkinTime: new Date('15-Nov-2022'),
      checkoutTime: new Date('28-Nov-2022'),
      rating: 4.8
    },
    {
      roomNumber: 3,
      roomType: 'super Delux Room',
      amenities: 'AC, BathTub, Free WIFI, TV, Bathroom, Kitchen',
      price: 200,
      photos: 'shorturl.at/douyF',
      checkinTime: new Date('15-Nov-2022'),
      checkoutTime: new Date('28-Nov-2022'),
      rating: 3.2
    }]
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "General Room",
      amenities: 'TV, Air Conditioner, Free Wifi, Kitchen',
      price: 500,
      photos: "https://images.oyoroomscdn.com/uploads/hotel_image/15977/deccd6d049538389.jpg",
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('13-Nov-2023'),
      rating: 5
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
  ngDoCheck() {
    console.log('on changes is called');
  }
  ngAfterViewInit() {
    //console.log(this.headerComponent);

    this.headerComponent.title = "Rooms View"
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }


}

