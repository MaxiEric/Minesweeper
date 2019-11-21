import { Block } from './block.entities';
const fellowBlock = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

/**
 * Wall class formed by a block matrix
 * @param block actual state
 * @param remainingBlocks  remaining blocks
 * @param mineCount mine counter
 */

export class Wall {
    public block: Block[][] = [];

    private remainingBlocks = 0;
    private mineCount = 0;

    constructor(size: number, mines: number) {
        for (let y = 0; y < size; y++) {
            this.block[y] = [];
            for (let x = 0; x < size; x++) {
                this.block[y][x] = new Block(y, x);
            }
        }
        console.log('Block structure to form the wall', this.block);

        // TODO it may happen that they touch the same value and mines are lost
        for (let i = 0; i < mines; i++) {
            const y = Math.floor(Math.random() * this.block.length);
            const x = Math.floor(Math.random() * this.block[y].length);
            this.block[y][x].mine = true;
        }

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                let adjacentMines = 0;
                for (const peer of fellowBlock) {
                    if (
                        this.block[y + peer[0]] &&
                        this.block[y + peer[0]][x + peer[1]] &&
                        this.block[y + peer[0]][x + peer[1]].mine
                    ) {
                        adjacentMines++;
                    }
                }
                this.block[y][x].proximityMines = adjacentMines;

                if (this.block[y][x].mine) {
                    this.mineCount++;
                }
            }
        }
        this.remainingBlocks = size * size - this.mineCount;
        console.log('mineCount: ', this.mineCount);
        console.log('remainingBlocks: ', this.remainingBlocks);
    }
}
