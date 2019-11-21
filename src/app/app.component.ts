import { Component } from '@angular/core';
import { Wall } from './entities/wall.entities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Minesweeper';

  wall: Wall;

  constructor() {
    this.wall = new Wall(10, 5);
  }
}
