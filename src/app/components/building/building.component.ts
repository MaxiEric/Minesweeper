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
    const resultCheckBlock = this.wall.checkBlock(block);
    resultCheckBlock === 'gameover' ? alert('You lose') : resultCheckBlock === 'win' ? alert('you win'):'';
  }

  public flag(block: Block){
    block.status === 'flag' ? block.status = 'open' : block.status = 'flag';
  }

  public startAgain(){
    this.wall = new Wall(10, 5);
  }
}
