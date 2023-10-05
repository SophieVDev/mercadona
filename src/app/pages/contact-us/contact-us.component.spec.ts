import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactUsComponent } from './contact-us.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsComponent, HeaderComponent, FooterComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
