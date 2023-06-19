import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBtn02Component } from './carousel-btn02.component';

describe('CarouselBtn02Component', () => {
  let component: CarouselBtn02Component;
  let fixture: ComponentFixture<CarouselBtn02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselBtn02Component]
    });
    fixture = TestBed.createComponent(CarouselBtn02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
