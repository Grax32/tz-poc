import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyTimeComponent } from './fancy-time.component';

describe('FancyTimeComponent', () => {
  let component: FancyTimeComponent;
  let fixture: ComponentFixture<FancyTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyTimeComponent]
    });
    fixture = TestBed.createComponent(FancyTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
