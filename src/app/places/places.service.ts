import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in paris',
      'https://miro.medium.com/max/4096/1*t-nXIcaD3oP6CS4ydXV1xw.jpeg',
      189.99),
    new Place(
      'p3',
      'Radebeul Ost',
      'A place in Germany',
      'https://www.petra-und-peter.de/petrasblog/http://www.petra-und-peter.de/petrasblog/wp-content/uploads/2014/12/rdbl0.jpg',
      489.99),

  ];

  constructor() { }

  getPlaces(): Place[] {
    return [...this.places];
  }

  getPlaceById(placeId: string): Place {
    return { ...this.places.find(place => place.id === placeId) };
  }
}
