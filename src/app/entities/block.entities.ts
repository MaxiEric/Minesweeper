/**
 * class that gives the base structure of each wall block
 * @param status actual state
 * @param mine  if you have a mine or not
 * @param proximityMines proximity of the mines
 * @param row row position
 * @param column column position
 */
export class Block {
    public status: 'open' | 'clear' | 'flag' = 'open';
    public mine = false;
    public proximityMines = 0;

    constructor(public row: number, public column: number) { }
}
