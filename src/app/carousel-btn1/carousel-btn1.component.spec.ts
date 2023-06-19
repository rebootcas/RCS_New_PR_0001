import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBtn1Component } from './carousel-btn1.component';

describe('CarouselBtn1Component', () => {
  let component: CarouselBtn1Component;
  let fixture: ComponentFixture<CarouselBtn1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselBtn1Component]
    });
    fixture = TestBed.createComponent(CarouselBtn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
