/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './Data.service';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
