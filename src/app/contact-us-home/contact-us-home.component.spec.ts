import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHomeComponent } from './contact-us-home.component';

describe('ContactUsHomeComponent', () => {
  let component: ContactUsHomeComponent;
  let fixture: ComponentFixture<ContactUsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsHomeComponent]
    });
    fixture = TestBed.createComponent(ContactUsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
