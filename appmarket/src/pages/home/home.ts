import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TablePage } from '../table/table';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrData = []
  myInput
  username

  //username:string;
  TablePage: TablePage;
  constructor(public navCtrl: NavController, private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems/").subscribe(_data => {
      this.arrData = _data;
      console.log(this.arrData);

    });
  }

  login(){
  	this.navCtrl.push('TablePage');
    this.fdb.list("/myItems/").push(this.username);
  }
 // logins(){
  //	//this.navCtrl.push(TablePage);
  //	this.navCtrl.setRoot(TablePage);
  //}

}
