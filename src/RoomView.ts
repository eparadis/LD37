
import {Room} from './Room';

export interface RoomView {
    Draw( room: Room) : void;
}

export class HTMLRoom implements RoomView{
    private parent : HTMLElement;
    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    Draw(room: Room) : void {
        const isOpenable = room.doorOpenable;
        const playerPosition = room.playerPosition;

        const numDoors = isOpenable.length;

        // draw player position
        const playerParent = document.createElement('div');
        this.parent.appendChild(playerParent);
        playerParent.id = 'playerParent';
        
        for( var i = 0; i < numDoors; i += 1) {
            const playerCell = document.createElement('div');
            playerCell.className = "playerCell";
            if( i == playerPosition) {
                playerCell.innerText = "P";
            }
            playerParent.appendChild(playerCell);
        }

        // draw doors
        const doorParent = document.createElement('div');
        this.parent.appendChild(doorParent);
        doorParent.id = 'doorParent';
        
        for(var i = 0; i < numDoors; i += 1) {
            const btn = document.createElement('button');
            btn.innerText = i.toString() + (isOpenable[i] ? " open": " locked");
            btn.setAttribute('doorNumber', i.toString());
            if(!isOpenable[i]) {
                btn.classList.add('disabled');
            }
            btn.onclick = function(ev) { room.openDoor( this.getAttribute('doorNumber')); };
            doorParent.appendChild(btn);
        }
    }
}