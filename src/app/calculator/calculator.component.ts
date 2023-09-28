import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  result: number;
  initial: number;
  final: number;
  time: number;
  formattedNum: string;
  parsedNum: number;
  submit(result: any) {
    console.log(result);
  }

  updateInitial(event: any) {
    this.initial = event.target.value;
  }
  updateFinal(event: any) {
    this.final = event.target.value;
  }
  updateTime(event: any) {
    this.time = event.target.value;
  }
  calculator() {
    this.result = (Math.pow(this.final/this.initial,1/this.time)-1)*100;
    this.formattedNum = this.result.toFixed(2);
    this.parsedNum = parseFloat(this.formattedNum);
    console.log(this.parsedNum+"this is the value");
    
  }
}
