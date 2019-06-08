import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form } from 'ionic-angular';
import {FormControl, FormGroup} from '@angular/forms'
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('name').then(res => {
      console.log(res);
      if(res)
        this.navCtrl.setRoot(HomePage);
    });
    this.loginForm = new FormGroup({
      username: new FormControl('SanthoshKumarS'),
      password: new FormControl('Monday@123')
    });
  }

  submitForm(){
    console.log(this.loginForm.value);
    this.storage.set('name', this.loginForm.value.username);
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
