import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '..´/providers/service';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

	users: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  	this.getDatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  getDatos()
  {
  	this.service.getData().subscribe(
  		data->this.users=data,
  		err->console.log(err)
  	);
  }

}
