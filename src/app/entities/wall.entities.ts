import { Block } from './block.entities';

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
    }
}
