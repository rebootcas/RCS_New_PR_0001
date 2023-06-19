import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeWhyUsComponent } from './home-why-us/home-why-us.component';

import { RouterModule } from '@angular/router';
import { TrailcompComponent } from './trailcomp/trailcomp.component';
import { AboutUsDetailsComponent } from './about-us-details/about-us-details.component';
import { CarouselBtn1Component } from './carousel-btn1/carousel-btn1.component';
import { CarouselBtn02Component } from './carousel-btn02/carousel-btn02.component';
import { CarouselBtn03Component } from './carousel-btn03/carousel-btn03.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesCardComponent } from './services-card/services-card.component';
import { HomeServicesComponent } from './home-services/home-services.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeCarouselComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeWhyUsComponent,
    TrailcompComponent,
    AboutUsDetailsComponent,
    CarouselBtn1Component,
    CarouselBtn02Component,
    CarouselBtn03Component,
    ContactUsComponent,
    ServicesCardComponent,
    HomeServicesComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
