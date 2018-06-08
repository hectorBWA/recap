import { Component, OnInit } from '@angular/core';



interface Fighter{
  name: string;
  number1?: number;
  returnNum?(): any ;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  fighter1: Fighter = {name: 'mike', number1: 10};
  fighter2: Fighter = {name: 'Goku', number1: 5, returnNum: () => {return(50);} };

  ngOnInit(){
    console.log(this.fighter1, this.fighter2 ,this.fighter2.returnNum);
  }
}

