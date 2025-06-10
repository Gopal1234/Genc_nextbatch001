import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../calculator.service';
import { AppComponent } from '../app.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture : ComponentFixture<CalculatorComponent>;
  let calService:CalculatorService;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
      declarations: [AppComponent,CalculatorComponent],
      providers:[CalculatorService]
    }).compileComponents();
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    calService=TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create sum using CalculteService', () => {
    const spy=spyOn(calService,'add').and.returnValue(16);
    component.calculate();
    expect(component.result).toBe(16);
    expect(spy).toHaveBeenCalledWith(8,8);
  });
  it("should reder a title",()=>
  {
  const appFixture=TestBed.createComponent(AppComponent);
  appFixture.detectChanges();
  const compiled=fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain("angular-test1");
  }
  )


});
