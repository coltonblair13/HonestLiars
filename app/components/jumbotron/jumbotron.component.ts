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
    this.jumbotronHeading = 'This is a Heading';
    this.jumbotronText = 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.';
    this.jumbotronButtonText = 'Read More';
    this.jumbotronButtonUrl = 'http://test.com';
  }
}
