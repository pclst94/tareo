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
  row = [
  	{
  	"Ubicación": "CD AYACUCHO",
  	"# de Empleados": "4",
  	"Turnos": "22-06" 
  	},
  	{
  	"Ubicación": "CD CAÑETE",
  	"# de Empleados": "7",
  	"Turnos": "22-06" 
  	},
  	{
  	"Ubicación": "CD HUANCAVELICA",
  	"# de Empleados": "2",
  	"Turnos": "22-06" 
  	},
  	{
  	"Ubicación": "CD HUANCAYO",
  	"# de Empleados": "8",
  	"Turnos": "22-06" 
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

}
