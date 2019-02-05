var Like = (function () {
    function Like(_numOfLikes) {
        this._numOfLikes = _numOfLikes;
        this._selected = false;
    }
    Object.defineProperty(Like.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "numOfLike", {
        get: function () {
            return this._numOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.click = function () {
        this._selected = !this._selected;
        if (this._selected) {
            this._numOfLikes++;
        }
        else {
            this._numOfLikes--;
        }
    };
    return Like;
})();
exports.Like = Like;
