// FIRST WAY
Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};

// SECOND WAY
Array.prototype.secondWay = function () {
    return this.length ? this[this.length - 1] : -1;
};

// THIRD WAY
Array.prototype.thirdWay = function () {
    return this.length ? this.slice(-1)[0] : -1;
};

const arr = [1, 2, 3];
// console.log(arr.last());
// console.log(arr.secondWay());
console.log(arr.thirdWay());
// Expected output should be: 3