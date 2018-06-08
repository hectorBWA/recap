import { Component } from '@angular/core';



class CarBrand{
  protected make: string;
  constructor(make: string){
    this.make = make;
    console.log(this.make);
  }
}

class Car extends CarBrand{
  constructor(public make: string, public model: string, public year: number){
  super(make);
  }
  getDetails(){
    return (this.make, this.model, this.year);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ford: CarBrand = new CarBrand('ford');
  dodge: CarBrand = new CarBrand('dodge');
  honda: Car = new Car ('honda', 'civic', 2001);

  // any: any;
  // str: string = 'sharks are cool';
  // num: number = 5;
  // space: void;

  // chad: null;

  // arr: any[] = [4, 'hello', true, false];
  // arrTwo: number[] = [5, 7];
  // arrThree: Array<number> = [4, 6];
  // arrFour: string[] = ['Hola'];
  // arrFive: Array<string> = ['hello'];

}

