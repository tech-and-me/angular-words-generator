import { Component } from '@angular/core';
import wordArray from '../utils/words'
import countryArray from '../utils/countries'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-word-generator';
  words:string = '';
  country:string = '';
  limit:number = 1;
  randomNum:number=0;

  handleSlideChange(newLimit:number){
    this.limit = newLimit;
  }

  generateWords(){
    this.country = ''
    this.words = wordArray.slice(0,this.limit).join(' ');
  }

  generateRandomCountry(){
    this.words = ''
    this.randomNum=Math.floor(Math.random() * countryArray.length)
    this.country = countryArray[this.randomNum];
  }
  
  reset(){
    this.words = ''
    this.country = ''
  }
}
