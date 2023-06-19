import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDetailsComponent } from './about-us-details/about-us-details.component';
import { AppComponent } from './app.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeWhyUsComponent } from './home-why-us/home-why-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { compileClassMetadata } from '@angular/compiler';
import { CarouselBtn1Component } from './carousel-btn1/carousel-btn1.component';
import { CarouselBtn02Component } from './carousel-btn02/carousel-btn02.component';
import { CarouselBtn03Component } from './carousel-btn03/carousel-btn03.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesCardComponent } from './services-card/services-card.component';

const routes: Routes = [
  {
    path: 'temp',
    component: AboutUsDetailsComponent
  },
  {
    path:'',
    component: HomeCarouselComponent
  },
  {
    path:'btn1',
    component: CarouselBtn1Component
  },
  {
    path:'btn2',
    component: CarouselBtn02Component
  },
  {
    path:'btn3',
    component: CarouselBtn03Component
  },
  {
    path:'contactus',
    component: ContactUsComponent
  },
{
  path:'contactus',
  component: ContactUsComponent
},
{
  path:'Services',
  component: ServicesCardComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
