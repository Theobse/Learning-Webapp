import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component {

  numberValue = 1;


  onClickIncrementValue() {
    this.numberValue++;
  }



  onInputChanged($event: Event) {
    this.numberValue = +(<HTMLInputElement> $event.target).value;
  }


  onDecr10($event: number) {
    this.numberValue -= 10;
  }
  onDecr1($event: number) {
    this.numberValue -= 1;
  }
  onIncr1($event: number) {
    this.numberValue += 1;
  }
  onIncr10($event: number) {
    this.numberValue += 10;
  }
}
