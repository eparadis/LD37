import {DoorGame} from './DoorGame';
import {HTMLRoom} from './RoomView';

(()=>{
    const roomView = new HTMLRoom( document.getElementById('room'));
    const game = new DoorGame(roomView);
    game.Run();
})();