import { Block } from './block.entities';
const fellowBlock = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

/**
 * Wall class formed by a block matrix
 * @param blocks actual state
 * @param remainingBlocks  remaining blocks
 * @param mineCount mine counter
 */

export class Wall {
    public blocks: Block[][] = [];

    private remainingBlocks = 0;
    private mineCount = 0;

    constructor(size: number, mines: number) {
        for (let y = 0; y < size; y++) {
            this.blocks[y] = [];
            for (let x = 0; x < size; x++) {
                this.blocks[y][x] = new Block(y, x);
            }
        }
        console.log('Block structure to form the wall', this.blocks);

        // TODO it may happen that they touch the same value and mines are lost
        for (let i = 0; i < mines; i++) {
            const y = Math.floor(Math.random() * this.blocks.length);
            const x = Math.floor(Math.random() * this.blocks[y].length);
            this.blocks[y][x].mine = true;
        }

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                let adjacentMines = 0;
                for (const peer of fellowBlock) {
                    if (
                        this.blocks[y + peer[0]] &&
                        this.blocks[y + peer[0]][x + peer[1]] &&
                        this.blocks[y + peer[0]][x + peer[1]].mine
                    ) {
                        adjacentMines++;
                    }
                }
                this.blocks[y][x].proximityMines = adjacentMines;

                if (this.blocks[y][x].mine) {
                    this.mineCount++;
                }
            }
        }
        this.remainingBlocks = size * size - this.mineCount;
        console.log('mineCount: ', this.mineCount);
        console.log('remainingBlocks: ', this.remainingBlocks);
    }

    /**
     * Validate the current state of the block and show if it corresponds to its adjacent
     */
    public checkBlock(block: Block): string | null {
        if (block.status !== 'open') {
          return;
        } else if (block.mine) {
          this.showAllBlocks();
          return 'gameover';
        } else {
            block.status = 'clear';
    
            if(block.proximityMines === 0) {
              for(const peer of fellowBlock) {
                if (
                  this.blocks[block.row + peer[0]] &&
                  this.blocks[block.row + peer[0]][block.column + peer[1]]
                ) {
                  this.checkBlock(this.blocks[block.row + peer[0]][block.column + peer[1]]);
                }
              }
            }
            if (this.remainingBlocks-- <= 1) {
              return 'win';
            }
            return;
        }
    }

    private showAllBlocks(){
      for (const row of this.blocks) {
        for (const block of row) {
          if (block.status === 'open') {
            block.status = 'clear';
          }
        }
      }
    }
}
