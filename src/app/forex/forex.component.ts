import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-close');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });
    this.getData();
  }

  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    let url =
      'https://openexchangerates.org/api/latest.json?app_id=89da3526069e4d7fa60d9f896d8e180f';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      const kepanjangan = {
        'USD': 'US Dollar',
        'SGD': 'Singapore Dollar',
        'BND': 'Brunei Dollar',
        'HKD': 'Hong Kong Dollar',
        'BTC': 'Bitcoin',
        'JPY': 'Japanese Yen',
        'EUR': 'Euro',
        'AUD': 'Australian Dollar',
        'CAD': 'Canadian Dollar',
        'GBP': 'British Pound Sterling',
      };

      let rates = data.rates;
      console.log(rates);

      let idr = rates.IDR;
      let idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD: ' + idr2);
      let row = [1, kepanjangan['USD'], 'USD', idr2];
      this._table1.row.add(row);

      let sgd = rates.IDR / rates.SGD;
      let sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log('SGD: ' + sgd2);
      row = [2, kepanjangan['SGD'], 'SGD', sgd2];
      this._table1.row.add(row);

      let bnd = rates.IDR / rates.BND;
      let bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('BND: ' + bnd2);
      row = [3, kepanjangan['BND'], 'BND', bnd2];
      this._table1.row.add(row);

      let hkd = rates.IDR / rates.HKD;
      let hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log('HKD: ' + hkd2);
      row = [4, kepanjangan['HKD'], 'HKD', hkd2];
      this._table1.row.add(row);

      let btc = rates.IDR / rates.BTC;
      let btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC: ' + btc2);
      row = [5, kepanjangan['BTC'], 'BTC', btc2];
      this._table1.row.add(row);

      let jpy = rates.IDR / rates.JPY;
      let jpy2 = formatCurrency(jpy, 'en-US', '', 'JPY');
      console.log('JPY: ' + jpy2);
      row = [6, kepanjangan['JPY'], 'JPY', jpy2];
      this._table1.row.add(row);

      let eur = rates.IDR / rates.EUR;
      let eur2 = formatCurrency(eur, 'en-US', '', 'EUR');
      console.log('EUR: ' + eur2);
      row = [7, kepanjangan['EUR'], 'EUR', eur2];
      this._table1.row.add(row);

      let aud = rates.IDR / rates.AUD;
      let aud2 = formatCurrency(aud, 'en-US', '', 'AUD');
      console.log('AUD: ' + aud2);
      row = [8, kepanjangan['AUD'], 'AUD', aud2];
      this._table1.row.add(row);

      let cad = rates.IDR / rates.CAD;
      let cad2 = formatCurrency(cad, 'en-US', '', 'CAD');
      console.log('CAD: ' + cad2);
      row = [9, kepanjangan['CAD'], 'CAD', cad2];
      this._table1.row.add(row);

      let gbp = rates.IDR / rates.GBP;
      let gbp2 = formatCurrency(gbp, 'en-US', '', 'GBP');
      console.log('GBP: ' + gbp2);
      row = [10, kepanjangan['GBP'], 'GBP', gbp2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
