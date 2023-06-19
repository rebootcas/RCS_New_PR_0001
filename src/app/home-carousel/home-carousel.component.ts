import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {

  constructor(private router: Router) { }

  btn1click()
  {
    this.router.navigate(['/btn1']);
    console.log("Hello");
  }

  btn2click()
  {
    this.router.navigate(['/btn2']);
  }
  btn3click()
  {
    this.router.navigate(['/btn3']);
  }
}
