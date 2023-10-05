import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomepageService } from './homepage.service';

describe('HomepageService', () => {
  let service: HomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Ajoutez HttpClientModule ici dans la section imports
      providers: [HomepageService]
    });
    service = TestBed.inject(HomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});