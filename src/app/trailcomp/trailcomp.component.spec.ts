import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailcompComponent } from './trailcomp.component';

describe('TrailcompComponent', () => {
  let component: TrailcompComponent;
  let fixture: ComponentFixture<TrailcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailcompComponent]
    });
    fixture = TestBed.createComponent(TrailcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
