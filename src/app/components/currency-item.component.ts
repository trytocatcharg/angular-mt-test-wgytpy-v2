import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExchangeApiService } from './services/exchange-api.service';
import { ExchangeModels } from '../models/exchange-rate.model';
import { CurrencyFormatPipe } from '../core/pipes/currency-format.pipe';

@Component({
  selector: 'currency-item',
  standalone: true,
  templateUrl: 'currency-item.component.html',
  styleUrls: ['currency-item.component.scss'],
  imports: [ CommonModule, AngularPaginatorModule,NgxPaginationModule, CurrencyFormatPipe],
})

export class CurrencyItemComponent implements OnInit {
  public exchangeData$: Observable<ExchangeModels> = of();
  page = 1;
  maxSize = 5;

  @Input()
  public currency = '';

  @Input()
  public interval = 10000;

  constructor(private exchangeApiService: ExchangeApiService) { }

  ngOnInit() {
    this.update();

    // setInterval(() => {
    //     this.update();
    // }, this.interval);
   }

   private update() {
    this.exchangeData$ = this.exchangeApiService.getExchangeRates(this.currency);
  }

  public clickHandler() {
    this.update();
  }

}
