export interface ExchangeModels {
  base: string;
  date: string;
  rates: Rate[];
}

export interface Rate {
  currency: string;
  value: number;
}