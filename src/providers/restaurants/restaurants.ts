import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the RestaurantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantsProvider {
  constructor(public http: HttpClient) {}

  getRestaurantByLatLong(lat, long) {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`,
          { headers: { "user-key": "083cd1c83c859bd5a5519fc2f96ae065" } } //Something like this6edf62dbdf6352b7d1f87d81fe4ad471
        )
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
