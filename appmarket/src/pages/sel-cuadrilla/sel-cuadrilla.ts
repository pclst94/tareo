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
  selector: 'page-sel-cuadrillas',
  templateUrl: 'sel-cuadrillas.html',
})
export class TablePage {
 currentDate;
 rows = [
    {
      "paterno": "Acosta",
      "materno": "Palma",
      "nombre": "Carlos Hernán"
    },
    {
      "paterno": "Albines",
      "materno": "Sosa",
      "nombre": "Raul Emanuel"
    },
    {
      "paterno": "Avila",
      "materno": "Pizarro",
      "nombre": "Mayra Lizet"
    },
    {
      "paterno": "Cayetano",
      "materno": "Capra",
      "nombre": "Alex Ronal"
    },
    {
      "paterno": "Chavarría",
      "materno": "Contreras",
      "nombre": "Juan Wilson"
    },
    {
      "paterno": "Chávez",
      "materno": "Gómez",
      "nombre": "Fernando Gonzalo"
    },
    {
      "paterno": "Córdova",
      "materno": "Gallardo",
      "nombre": "Nataly Vanessa"
    },
    {
      "paterno": "Hurtado",
      "materno": "Tomaylla",
      "nombre": "Benji José"
    },
    {
      "paterno": "Joya",
      "materno": "Rojas",
      "nombre": "Omar Ali"
    }
  ];
  tablestyle = 'bootstrap';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentDate = new Date();
  }

  switchStyle() {
    if(this.tablestyle == 'dark'){
      this.tablestyle = 'bootstrap'
    } else {
      this.tablestyle = 'dark';
    }
  }
   getRowClassx(rows){
    return rows.Paterno='Hurtado';
  }
}
