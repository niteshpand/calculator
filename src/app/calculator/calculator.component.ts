import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnChanges, OnInit {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes Detect');
  }
  result: number;
  initial: number;
  final: number;
  time: number;
  formattedNum: string;
  parsedNum: number;
  text = 'hello world';
  @Input() name: string = 'abc';
  ngOnInit(): void {
    console.log('this is me');
    this.calculator()
  }

  // updateInitial(event: any) {
  //   this.initial = event.target.value;
  // }
  // get updateInitial(): any {
  //   return this.initial;
  // }
  updateInitial(event: any) {
    this.initial = event.target.value;
  }
  change(event: any) {
    this.text = event.target.value;
  }

  // get updateFinal(): any {
  //   return this.final;
  // }
  updateFinal(event: any) {
    this.final = event.target.value;
  }
  // get updateTime(): any {
  //   return this.time;
  // }
  updateTime(event: any) {
    this.time = event.target.value;
  }
  calculator() {
    this.result =
      (Math.pow(this.final / this.initial, 1 / this.time) - 1) * 100;
    this.formattedNum = this.result.toFixed(2);
    this.parsedNum = parseFloat(this.formattedNum);
    console.log(this.parsedNum + 'this is the value');
  }
}
