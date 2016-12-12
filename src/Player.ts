
export class Player {
    position: number;

    move( location: string) : void {
        this.position = Number(location);
        console.log( location);
    }
}