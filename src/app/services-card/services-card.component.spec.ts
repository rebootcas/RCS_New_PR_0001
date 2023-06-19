import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCardComponent } from './services-card.component';

describe('ServicesCardComponent', () => {
  let component: ServicesCardComponent;
  let fixture: ComponentFixture<ServicesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCardComponent]
    });
    fixture = TestBed.createComponent(ServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
