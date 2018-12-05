import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {
 rows = [
    {
      "ubicacion": "CD AYACUCHO",
      "empleados": 4,
      "turno": 22
    },
    {
      "ubicacion": "CD HUANCAVELICA",
      "empleados": 8,
      "turno": 12
    },
    {
      "ubicacion": "CD HUANCAYO",
      "empleados": 7,
      "turno": 6
    },
    {
      "ubicacion": "CD CAÑETE",
      "empleados": 2,
      "turno": 22
    }
  ];
  tablestyle = 'bootstrap';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  switchStyle() {
    if(this.tablestyle == 'dark'){
      this.tablestyle = 'bootstrap'
    } else {
      this.tablestyle = 'dark';
    }
  }
   getRowClassx(rows){
    return rows.Ubicación='CD HUANCAYO';
  }
}
