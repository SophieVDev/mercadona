import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RgpdService {

  constructor(private cookieService: CookieService) {}

  hasConsent(): boolean {
    return this.cookieService.check('rgpd-consent');
  }

  giveConsent(): void {
    this.cookieService.set('rgpd-consent', 'true');
  }
}