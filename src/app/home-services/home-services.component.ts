import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent {

  constructor(private router: Router) { }

  Servicesdetails()
  {
    this.router.navigate(['/Services']);
    console.log("Hello");
  }

}
