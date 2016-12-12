

export class Door {
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