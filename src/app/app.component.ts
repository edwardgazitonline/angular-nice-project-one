import { Component , Input ,} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'event-binding-with-button-one';
  show: boolean = false;
  @Input() edd;

  constructor() {}

  ngOnInit(): void {}

  onShow(): void {
    alert('Show button clicked!');
  }

  showHide(): boolean {
    return (this.show = !this.show)
  }
}
