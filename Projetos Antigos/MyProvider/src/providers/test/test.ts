import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestProvider {

  public message: any = "I'm new here";
  constructor(public http: Http) {
    console.log('Hello TestProvider Provider');
  }

  setMessage(message) {
    this.message = message;
  }
}
