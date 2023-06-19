import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4Component } from './service4.component';

describe('Service4Component', () => {
  let component: Service4Component;
  let fixture: ComponentFixture<Service4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Service4Component]
    });
    fixture = TestBed.createComponent(Service4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
