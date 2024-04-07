import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExchangeApiService } from './components/services/exchange-api.service';
import { CurrencyItemComponent } from './components/currency-item.component';

export interface ExchangeModels {
  base: string;
  date: string;
  rates: [{
    currency: string;
    value: number;
  }]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, CurrencyItemComponent],
  providers: [ExchangeApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'mt-test-angular';

  urlLogo =
  'https://www.moneytrans.eu/spain/wp-content/uploads/sites/26/2021/04/moneytrans-logo.svg';


   constructor() {}

  


}
