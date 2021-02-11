import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class CommonService {
  //public loginUser = localStorage.getItem('loginUser');
  public config = {};
  public userData: any = {};
  public loading: any;

  constructor(
    public http: HttpClient,
    private _toastr: ToastrService,
    public router: Router,
    public spinner: NgxSpinnerService
  ) { }



  public toastSuccessMsg(title: any, message: any, timeOut?: object) {
    this._toastr.success(title, message, timeOut);
  }

  public toastErrorMsg(title: any, message: any, timeOut?: object) {
    this._toastr.error(title, message, timeOut);
  }

  public toastWarningMsg(title: any, message: any, timeOut?: object) {
    this._toastr.warning(title, message, timeOut);
  }

  //show loader
  public showLoading() {
    this.spinner.show();
  }

  //Hide loader
  public hideLoading() {
    setTimeout(() => {
      /// spinner ends after 5 seconds
      this.spinner.hide();
    }, 100);
  }

  get<T>(url: string, headers?: HttpHeaders | null): Observable<T> {
    const expandedHeaders = this.prepareHeader(headers);
    return this.http.get<T>(url, expandedHeaders)
  }

  private prepareHeader(headers?: HttpHeaders | null): object {
    headers = headers || new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('x-rapidapi-key', '6cbe379f23mshb884a4236a1cb7fp17fc90jsncb99ee43dacc');
    headers = headers.set('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
    return {
      headers: headers
    }
  }

}

