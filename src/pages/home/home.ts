import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import {RestaurantsProvider} from '../../providers/restaurants/restaurants';
import { RestaurantDetailPage } from "../restaurant-detail/restaurant-detail";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  restaurants: any[] = [];
  loader: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public _restaurantService:RestaurantsProvider,
    public loadingController: LoadingController
  ) {
    this.showLoader();
    this.geolocation.getCurrentPosition().then((res:any) => {
      console.log(res.coords.latitude);
      this._restaurantService.getRestaurantByLatLong(res.coords.latitude,res.coords.longitude)
      .then((response:any) => {
        console.log("Response : ", response);
        this.restaurants = response.nearby_restaurants;
        this.hideLoader();
      }).catch(err => {
        console.log("Error : ",err);
        this.hideLoader();
      });
    });
  }

  showLoader = () => {
    if(!this.loader) {
      this.loader = this.loadingController.create({
        content: 'Please Wait...'
      });
    }
    this.loader.present();
  };

  hideLoader = () => {
    this.loader.dismiss();
  }

  dispResDet(item) {
    console.log("Item : ",item);
    this.navCtrl.push(RestaurantDetailPage, item);
  }
}
