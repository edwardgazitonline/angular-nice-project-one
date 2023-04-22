import { Component, EventEmitter, OnInit , Output  } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Output() edd  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}