import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-detail',
  templateUrl: 'restaurant-detail.html',
})
export class RestaurantDetailPage {
  name: string;
  img: string;
  cuisines: string;
  address: string;
  restaurant: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restaurant = navParams.get('restaurant');
    console.log(navParams,"Restaurant: ", this.restaurant);
    this.name = this.restaurant.name;
    console.log("Name : ", this.name);
    this.img = this.restaurant.featured_image;
    this.cuisines = this.restaurant.cuisines;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantDetailPage');
  }

}
