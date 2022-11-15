import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alerts } from '../models/alerts';
import { Observable } from 'rxjs';



const URL ="http://127.0.0.1:3000/api/alert/"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAlerts():Observable<any>{
    return this.http.get(URL )
  }
  updateAlerts(alert:Alerts):Observable<any>{
    return this.http.post(URL + "/update",alert)
  }
  destroyAlerts(alerts:Alerts):Observable<any>{
    return this.http.post(URL + "/destroy",alerts)
  }
}
