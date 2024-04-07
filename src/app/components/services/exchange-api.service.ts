import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { ExchangeModels, Rate } from '../../models/exchange-rate.model';


@Injectable({providedIn: 'root'})
export class ExchangeApiService {
  constructor(private httpClient: HttpClient) { }
  // TODO: move to .env
  private ENDPOINT_API = 'https://api.apilayer.com/exchangerates_data/latest?base=';
  private api_key = 'DsHJFEaj5RbyT65CF7UGmYVl6HoTN1QC';

  public getExchangeRates(base: string) {
    return this.httpClient.get('assets/'+base+'.json').pipe(
      delay(2000),
           map((res: any) => {
        const rates = Object.entries(res.rates);
       return {
         base: res.base,
         date: res.date,
         rates: rates.map(([currency, value]) => {
           return { currency, value } as Rate;
         })
       } as unknown as ExchangeModels
      }));
    // return  this.httpClient.get(this.ENDPOINT_API + base, { headers: { apikey: this.api_key } }).pipe(
    //   map((res: any) => {
    //     const rates = Object.entries(res.rates);
    //    return {
    //       base: res.base,
    //       date: res.date,
    //       rates: rates.map(([currency, value]) => {
    //         return { currency, value } as Rate;
    //       })
    //     } as ExchangeModels
    //   }));
  }

}
