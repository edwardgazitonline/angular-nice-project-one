import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello</h1>
  <h1> This is a Routing Test {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
