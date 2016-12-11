
export class Room {
    doorOpenable = [ false, true, true, true, true, false];
    playerPosition = 0;

    openDoor( doorId: string) : void {
        this.playerPosition = Number(doorId);
        console.log(this.playerPosition);
    }
}