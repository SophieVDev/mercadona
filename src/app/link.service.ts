import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(private router: Router) {}

  getProfilePageLink(): string {
    return this.router.createUrlTree(['/profile']).toString();
  }
}

