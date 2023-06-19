import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {   } from '@fortawesome/free-solid-svg-icons'
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //filmIcon = faFilm;
  logo:String;
  Onsubmit(f:NgForm)
  {
     console.log(f);
  }
  constructor()
  {
    this.logo= "Reboot/src/app/footer/temp.jpg"
  }
  ngOnInit(): void {
      
  }

}
