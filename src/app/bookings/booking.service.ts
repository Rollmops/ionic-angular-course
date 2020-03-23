import { Booking } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  // tslint:disable-next-line:variable-name
  private _bookings: Booking[] = [
    {
      id: 'b1',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'

    }
  ];

  constructor() { }

  getBookings(): Booking[] {
    return [...this._bookings];
  }
}
