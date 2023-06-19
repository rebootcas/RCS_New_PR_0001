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
import {Service1Component} from './service1/service1.component';
import {Service5Component} from './service5/service5.component';
import {Service4Component} from './service4/service4.component';
import {Service3Component} from './service3/service3.component';
import {Service2Component} from './service2/service2.component';

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
},
{
  path:'Services/s1',
  component: Service1Component
},{
  path:'Services/s5',
  component: Service5Component
},
{
  path:'Services/s2',
  component: Service2Component
},{
  path:'Services/s3',
  component: Service3Component
},
{
  path:'Services/s4',
  component: Service4Component
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
