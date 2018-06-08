import { Component } from '@angular/core';



module Vehicle {
  export class Sedan {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
      this.make = make; 
      this.model = model;
      this.year = year;
    }
  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  honda = new Vehicle.Sedan('Ford', 'Focus', 2001);
  ford = new Vehicle.Sedan('Honda', 'Civic', 2001);
}

