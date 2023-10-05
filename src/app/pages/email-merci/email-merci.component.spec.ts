import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { EmailMerciComponent } from './email-merci.component';

describe('EmailMerciComponent', () => {
  let component: EmailMerciComponent;
  let fixture: ComponentFixture<EmailMerciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailMerciComponent, HeaderComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(EmailMerciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
