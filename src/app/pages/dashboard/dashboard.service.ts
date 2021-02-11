import { Injectable } from '@angular/core';
import { CommonService} from '../../common/commonService';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public _commonService: CommonService) { }
  getTrendingTickers() {
    return this._commonService.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers")
      .pipe(map((x: any) => x));
  }
}
