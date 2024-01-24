import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){

  }

  routeToRegisterPage(){
    this.router.navigateByUrl('/smart-shop/register');
  }

  routeToLoginPage(){
    this.router.navigateByUrl('/smart-shop/login');
  }

  routeToSearchResults(){
    this.router.navigateByUrl('/smart-shop/search/results');
  }
}
