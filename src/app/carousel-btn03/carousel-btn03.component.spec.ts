import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBtn03Component } from './carousel-btn03.component';

describe('CarouselBtn03Component', () => {
  let component: CarouselBtn03Component;
  let fixture: ComponentFixture<CarouselBtn03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselBtn03Component]
    });
    fixture = TestBed.createComponent(CarouselBtn03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
