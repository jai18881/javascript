Function.prototype.compose = function(prevFunc) {
	const thisFunc = this;
	return function() {
		return thisFunc(prevFunc.apply(null, arguments));
	}
};

Function.prototype.sequence = function(prevFunc) {
	const thisFunc = this;
	return function() {
		return prevFunc(thisFunc.apply(null, arguments));
	}
};

function function1(a){ return a + ' 1';}
function function2(b){ return b + ' 2';}
function function3(c){ return c + ' 3';}

// Should return 'count 1 2 3'
function executeComposition() {
	var composition = function3.compose(function2).compose(function1);
	console.log(typeof composition);
	return composition('count');
}

// Should return 'count 1 2 3'
function executeSequence() {
	var sequence = function1.sequence(function2).sequence(function3);
	return sequence('count');
}

// Should return the result of Math.pow(3,5)
function executeBindFirstArg() {
	var powersOfThree = bindFirstArg(Math.pow, 3);
	return powersOfThree(5);
}


console.log(executeComposition(), executeSequence());