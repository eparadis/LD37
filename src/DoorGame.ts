import {RoomView} from './RoomView';
import {Room} from './Room';

export class DoorGame {

    private view : RoomView;
    private room : Room;

    constructor( view : RoomView ) {
        this.view = view;
        this.room = new Room();
    }

    Run() : void {
        this.view.Draw(this.room);
    }
}