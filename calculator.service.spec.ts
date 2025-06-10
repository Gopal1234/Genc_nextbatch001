import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add two numbers', () => {
    expect(service.add(2,6)).toBe(8);
  });
  it('should minus two number', () => {
    expect(service.sustract(10,8)).toBe(1);
  });
});
