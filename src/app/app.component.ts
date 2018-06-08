import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  any: any;
  str: string = 'sharks are cool';
  num: number = 5;
  space: void;

  chad: null;

  arr: any[] = [4, 'hello', true, false];
  arrTwo: number[] = [5, 7];
  arrThree: Array<number> = [4, 6];
  arrFour: string[] = ['Hola'];
  arrFive: Array<string> = ['hello'];

}

