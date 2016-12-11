import {RoomView} from './RoomView';
import {Room} from './Room';

export class DoorGame {

    private view : RoomView;

    constructor( view : RoomView ) {
        this.view = view;
    }

    Run() : void {
        this.view.Draw(new Room());
    }
}