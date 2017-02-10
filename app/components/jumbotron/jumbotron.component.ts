import { Component  } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl:'jumbotron.component.html'
})

export class JumbotronComponent {
  private jumbotronHeading: string;
  private jumbotronText: string;
  private jumbotronButtonText: string;
  private jumbotronButtonUrl: string;

  constructor(){
    this.jumbotronHeading = 'The Honest Liars';
    this.jumbotronText = 'The Honest Liars is a sports podcast hosted by two brothers, Conner and Colton Blair, who have loved (and hated at times) sports since birth. Through no fault of their own they were born into a family that spent hours on end watching, analyzing, and arguing about sports. Follow along as they attempt to stay on point while discussing NBA, NFL, NCAA Football, NCAA Mens Basketball, Premier League Soccer, and much much more.';
    this.jumbotronButtonText = 'Read More';
    this.jumbotronButtonUrl = 'http://test.com';
  }
}
