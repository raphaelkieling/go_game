import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl:ToastController,
    private clipboard: Clipboard,
    private alertCtrl:AlertController
  ) {}

  Logout(){
    this.navCtrl.pop();
  }

  AbrirModalDeEnvioDePedido(){
    this.alertCtrl.create({
      title: 'Tem certeza?',
      message: 'Talvez seu time fique com o pé atraz se você estiver só brincando hehe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Pode Enviar',
          handler: () => {
            this.EnviarChamada();
          }
        }
      ]
    }).present();
  }

  CopiarCodigoDoTime(){
    this.toastCtrl.create({
      message: 'Copiado com sucesso!',
      duration: 3000
    }).present();

    this.clipboard.copy('Hello world');    
  }

  EnviarChamada(){
   

  }
}
