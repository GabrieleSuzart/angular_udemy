export class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ', Y:' + this._y);
    }

    // get x() {
    //     return this._x;
    // }

    // set x(value) {
    //     if (value < 0)
    //         throw new Error('O valor não pode ser menor que 0.');
        
    //     this._x = value;
    // }
}