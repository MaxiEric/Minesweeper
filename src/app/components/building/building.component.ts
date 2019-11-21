import { Component } from '@angular/core';
import { Wall } from 'src/app/entities/wall.entities';
import { Block } from 'src/app/entities/block.entities';
import { timer } from 'rxjs';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent {

  public wall: Wall;
  private intervalTime: intervalTime;
  public time = 0;

  constructor() {
    this.wall = new Wall(10, 5);
    const source = timer(1000, 2000);
  }

  // TODO Find another alternative to change this method
  private startTheGame() {
    this.interval = setInterval(() => {
      this.time ++;
    },1000)
  }

  public checkBlock( block: Block) {
    this.time === 0 ? this.startTheGame() : '';
    const resultCheckBlock = this.wall.checkBlock(block);
    
    if( resultCheckBlock === 'gameover' ){
      clearInterval(this.interval);
      alert('Perdiste!')
    }else if(resultCheckBlock === 'win'){
      clearInterval(this.interval);
      alert('Ganaste')
    }
  }

  public flag(block: Block){
    block.status === 'flag' ? block.status = 'open' : block.status = 'flag';
  }

  public startAgain(){
    this.time = 0;
    this.startTheGame(); ;
    this.wall = new Wall(10, 5);
  }
}
