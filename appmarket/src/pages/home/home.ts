import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TablePage } from '../table/table';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
TablePage: TablePage;
  constructor(public navCtrl: NavController) {

  }

  login(){
  	this.navCtrl.push('TablePage');
  }
 // login(){
  //	//this.navCtrl.push(TablePage);
  //	this.navCtrl.setRoot(TablePage);
  //}
}
