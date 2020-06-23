import { TestBed, inject } from '@angular/core/testing';

import { ShoppringCartService } from './shoppring-cart.service';

describe('ShoppringCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppringCartService]
    });
  });

  it('should be created', inject([ShoppringCartService], (service: ShoppringCartService) => {
    expect(service).toBeTruthy();
  }));
});
