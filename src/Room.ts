
import { Door } from './Door';
import { Player } from './Player';

export class Room {
    doorOpenable = [false, true, true, true, true, false];

    private player: Player;

    constructor() {
        this.player = new Player();
    }

    playerIsIn(position: number): boolean {
        return this.player.position == position; 
    }

    openDoor(doorId: string): void {
        // logic about what happens when you open a door goes here
        // for now, just move the player to that door, which is 
        // kinda what would happen some of the time
        this.player.move(doorId);
    }

    addDoors(doorParent: HTMLElement, isOpenable: boolean[]) {
        const numDoors = isOpenable.length;

        for (var i = 0; i < numDoors; i += 1) {

            let name = i.toString();
            if (i == 0) {
                name = "entrance";
            }
            if (i == numDoors - 1) {
                name = "exit";
            }
            const door = new Door(doorParent, name, this);
            if (isOpenable[i]) {
                door.unlock();
            }
        }
    }
}