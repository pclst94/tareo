import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//@Injectable()
//export class ServiceProvider {
//
//  constructor(public http: HttpClient) {
//    console.log('Hello ServiceProvider Provider');
// }
//
//}
@Injectable()
export class ServiceProvider {
	api:string = 'http://localhost/appmarket-api/'

	constructor(public http: Http){
	}
	getData()
	{
		return this.http.get(this.api+'listado.php').map(res=>res.json())
	}
}