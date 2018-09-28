"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
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
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
