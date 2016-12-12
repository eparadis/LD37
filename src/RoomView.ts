
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
        const playerPosition = room.playerPosition;

        const numDoors = isOpenable.length;

        // draw player position
        const playerParent = document.createElement('div');
        this.parent.appendChild(playerParent);
        playerParent.id = 'playerParent';

        for (var i = 0; i < numDoors; i += 1) {
            const playerCell = document.createElement('div');
            playerCell.className = "playerCell";
            if (i == playerPosition) {
                playerCell.innerText = "P";
            }
            playerParent.appendChild(playerCell);
        }

        // draw doors
        const doorParent = document.createElement('div');
        this.parent.appendChild(doorParent);
        doorParent.id = 'doorParent';

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

class Door {
    private openable : boolean = false;
    private btn : HTMLElement;
    private name: string;

    constructor(parent: HTMLElement, name: string) {
        this.name = name;
        this.btn = document.createElement('button');
        this.btn.setAttribute('doorNumber', this.name );
        this.btn.onclick = function (ev) { console.log(name); };
        this.setAppearance();
        parent.appendChild(this.btn);
    }

    unlock() : void {
        this.openable = true;
        this.setAppearance();
    }

    private setAppearance() {
        this.btn.innerText = this.name + (this.isOpenable() ? " open" : " locked");
        
        this.btn.classList.remove('disabled');
        if (!this.isOpenable()) {
            this.btn.classList.add('disabled');
        }
    }

    private isOpenable() : boolean {
        return this.openable;
    }
}