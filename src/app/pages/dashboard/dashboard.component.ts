import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/commonService';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  filterQuery: any = '';
  tradingList : any = [];
  constructor(private _dashboardService: DashboardService,
    private _CommonService: CommonService) {
  }

  ngOnInit(): void {
     this.getTrendingTickers();
  }



  getTrendingTickers() {
    this._CommonService.showLoading();
    this._dashboardService.getTrendingTickers().subscribe((res: any) => {
      if (res && res.finance && res.finance.result && res.finance.result.length > 0 )  {
        this.tradingList = res.finance.result[0].quotes;
      }
      this._CommonService.hideLoading();
    }, error => {
      this._CommonService.hideLoading();
      this._CommonService.toastErrorMsg('Error', error);
    });
  }

}
