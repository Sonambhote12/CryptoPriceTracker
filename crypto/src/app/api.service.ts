import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCurrentData(currency:string){
    return this.http.get<any>(`${environment.apiUrl}/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  getTrendingCurrency(currency:string){
    return this.http.get<any>(`${environment.apiUrl}/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }
  getGrapData(coinId:string, currency:string, days:string){
    return this.http.get<any>(`${environment.apiUrl}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }
  getCurrencyById(coinId:string){
    return this.http.get<any>(`${environment.apiUrl}/coins/${coinId}`);
  }
}
