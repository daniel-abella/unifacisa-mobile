import { TestProvider } from './../../providers/test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page-one',
  templateUrl: 'page-one.html',
  providers: [TestProvider]
})
export class PageOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private testProvider: TestProvider) {
  }

   changeMessage(){
        this.testProvider.setMessage("Sistemas de Informação");
    }
}
