import { TestProvider } from './../../providers/test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page-two',
  templateUrl: 'page-two.html',
  providers: [TestProvider]
})
export class PageTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private testProvider: TestProvider) {
  }

  changeMessage(){
       this.testProvider.setMessage("Jogos Digitais");
  }
}
