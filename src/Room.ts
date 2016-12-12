
import {Door} from './Door';

export class Room {
    doorOpenable = [ false, true, true, true, true, false];
    playerPosition = 0;

    openDoor( doorId: string) : void {
        this.playerPosition = Number(doorId);
        console.log(this.playerPosition);
    }

    addDoors( doorParent : HTMLElement , isOpenable : boolean[]) {
        const numDoors = isOpenable.length;

        for (var i = 0; i < numDoors; i += 1) {

            let name = i.toString();
            if( i == 0) { 
                name = "entrance";
            }
            if( i == numDoors - 1) {
                name = "exit";
            }
            const door = new Door(doorParent, name);
            if(isOpenable[i]) {
                door.unlock();
            }
        }
    }
}