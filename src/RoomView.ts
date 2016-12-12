
import { Room } from './Room';

export interface RoomView {
    Draw(room: Room): void;
}

export class HTMLRoom implements RoomView {
    private parent: HTMLElement;
    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    Draw(room: Room): void {
        const isOpenable = room.doorOpenable;

        const numDoors = isOpenable.length;

        // draw player position
        this.drawPlayer(room)

        // draw doors
        const doorParent = document.createElement('div');
        this.parent.appendChild(doorParent);
        doorParent.id = 'doorParent';

        room.addDoors(doorParent, isOpenable);
    }

    private drawPlayer(room: Room) {
        const playerParent = document.createElement('div');
        this.parent.appendChild(playerParent);
        playerParent.id = 'playerParent';

        for (var i = 0; i < room.doorOpenable.length; i += 1) {
            const playerCell = document.createElement('div');
            playerCell.className = "playerCell";
            if (room.playerIsIn(i)) {
                playerCell.innerText = "P";
            }
            playerParent.appendChild(playerCell);
        }
    }
}