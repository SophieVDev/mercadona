import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgpdAlertComponentComponent } from './rgpd-alert-component.component';

describe('RgpdAlertComponentComponent', () => {
  let component: RgpdAlertComponentComponent;
  let fixture: ComponentFixture<RgpdAlertComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgpdAlertComponentComponent]
    });
    fixture = TestBed.createComponent(RgpdAlertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
