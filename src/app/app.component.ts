import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExchangeApiService } from './components/services/exchange-api.service';
import { CurrencyItemComponent } from './components/currency-item.component';
// import { ExchangeModels } from './models/exchange-rate.model';

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

   constructor() {}

  


}
