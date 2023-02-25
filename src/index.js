module.exports = function reverse (n) {
    if ( n === Math.abs(n)) {
        return reverse(n);
    } else if ( n !== Math.abs(n)) {
        return Math.abs(reverse(n))
    }
}
