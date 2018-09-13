import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  respouceData : any;
  userData = {"name":"", "email":"", "password":"", "password_confirmation":""};


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menu: MenuController, 
              public authServiceProvider: AuthServiceProvider, 
              public alertCtl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  ionViewWillEnter () { 
    this.menu.enable (false); 
  }

  SignUp(){
    this.authServiceProvider.postData(this.userData, "sign_up").then((result) => {
      this.respouceData = result;
      console.log("entro");
      console.log(this.respouceData);
      localStorage.setItem('user', JSON.stringify(this.respouceData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      let alert = this.alertCtl.create({
        title: 'Registro',
        subTitle: 'NO se pudo registrar, por favor intente mas tarde.',
        buttons: ['Aceptar']
      });
      alert.present();
    });
}
        
}
