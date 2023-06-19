import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent {

  constructor(private router: Router) { }

  Servicesdetails()
  {
    const navigationExtras: NavigationExtras = {
      fragment: 'top'
    };
    this.router.navigate(['/Services']);
    console.log("Hello");
  }

}
