import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stocks';
  loginUserDetail: any;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.loginUserDetail = localStorage.getItem('loginUser')
    if(this.loginUserDetail) {
      this.router.navigate(['/home']);
    }
  }

  Logout() {
    localStorage.removeItem('loginUser');
    this.router.navigate(['/login']);
    this.loginUserDetail = null;
  }

}
