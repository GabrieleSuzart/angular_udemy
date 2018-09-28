
export class LikeComponent { 
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1 : +1;
            // Mesma coisa de escrever o bloco abaixo:
            // if (this._isSelected) {
            //     this._likesCount--;
            // } else {
            //     this._likesCount++;
            // }
        this._isSelected = !this._isSelected;
            // Mesma coisa que escrever o bloco abaixo:
            // if (this._isSelected) {
            //     this._isSelected = false;
            // } else {
            //     this._isSelected = true;
            // }
    }

    get likesCount() { 
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}