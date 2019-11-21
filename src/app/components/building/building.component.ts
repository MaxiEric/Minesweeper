import { Component } from '@angular/core';
import { Wall } from 'src/app/entities/wall.entities';
import { Block } from 'src/app/entities/block.entities';

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

  public checkBlock( block: Block) {
    console.log('checkBlock block: ', block);
    const resultCheckBlock = this.wall.checkBlock(block);
    resultCheckBlock === 'gameover' ? alert('You lose') : alert('you win');
  }

}
