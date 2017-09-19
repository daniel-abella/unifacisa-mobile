import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Carro {
   id: string;
   dono: string;
   modelo: string;
   multa: boolean;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: FirebaseListObservable<any>;
  carro: Carro;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.lista = db.list('/carros');
    this.carro = new Carro();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarroPage');
  }

  cadastrar() {
    this.lista.push(this.carro);
    this.carro = new Carro();  
  }
}
