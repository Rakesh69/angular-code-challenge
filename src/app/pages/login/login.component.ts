import { environment } from './../../../environments/environment';
import { CommonService } from './../../common/commonService';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationData: any = {};
  isSubmit = false;
    constructor(

        private route: ActivatedRoute,
        private router: Router,
        private _commonService: CommonService
    ) {

    }

    ngOnInit() {

    }

    onLoggedin(loginform:any) {
      debugger
      this._commonService.showLoading()
      this.isSubmit = true;
      if (loginform.form.invalid) {
          return;
      } else {
          this._commonService.showLoading();

          if(this.authenticationData.UserName.toLowerCase() == environment.username.toLowerCase() && this.authenticationData.Password.toLowerCase() == environment.password.toLowerCase()){
              localStorage.setItem('loginUser',JSON.stringify(this.authenticationData.UserName))
              this.router.navigate(['/dashboard']);
              this._commonService.hideLoading()
          } else {
            this._commonService.toastErrorMsg('Please enter valid username and password','Error');
          }
          this._commonService.hideLoading()
      }
  }
}
