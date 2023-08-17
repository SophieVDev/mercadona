import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMerciComponent } from './email-merci.component';

describe('EmailMerciComponent', () => {
  let component: EmailMerciComponent;
  let fixture: ComponentFixture<EmailMerciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailMerciComponent]
    });
    fixture = TestBed.createComponent(EmailMerciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
