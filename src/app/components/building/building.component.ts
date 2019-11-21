import { Component } from '@angular/core';
import { Wall } from 'src/app/entities/wall.entities';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {

  wall: Wall;

  constructor() {
    this.wall = new Wall(10, 5);
  }

}
