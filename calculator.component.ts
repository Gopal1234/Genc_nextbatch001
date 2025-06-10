import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
result:number=0;

constructor(private calService:CalculatorService)
{

}
calculate():void{
  this.result=this.calService.add(8,8);
  console.log(this.result);
  
}



}
