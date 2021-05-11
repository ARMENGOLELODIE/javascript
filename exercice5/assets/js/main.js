Number.prototype.mod = function(n) {
	var m = (( this % n) + n) % n;
	return m < 0 ? m + Math.abs(n) : m;
};

console.log( parseInt( 41).mod( 7) ); // 6