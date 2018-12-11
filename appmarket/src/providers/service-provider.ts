import { Innjectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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