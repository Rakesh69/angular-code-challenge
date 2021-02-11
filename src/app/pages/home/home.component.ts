import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginUserDetail: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginUserDetail = localStorage.getItem('loginUser')
    if(!this.loginUserDetail) {
      this.router.navigate(['/login']);
    }
  }

}
