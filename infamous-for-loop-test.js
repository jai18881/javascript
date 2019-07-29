const forLoopProblem = () => {
    for(var i = 0; i < 9; i++) {
        setTimeout(() => {
            console.log(i)
        }, 10);
    }
}
forLoopProblem();

const forLoopSolution1 = () => {
    for(let i = 0; i < 9; i++) {
        setTimeout(() => {
            console.log(i);
        }, 10);
    }
}
forLoopSolution1();

const forLoopSolution2 = () => {
    for(var i = 0; i < 9; i++) {
        let newFunc = (i) => console.log(i);
        newFunc = newFunc.bind(this, i);
        setTimeout(() => {
            newFunc();
        }, 10);
    }
}
forLoopSolution2();

const forLoopSolution3 = () => {
    for(var i = 0; i < 9; i++) {
        (function(i) {
            setTimeout(() => {
                console.log(i);
            }, 10);
        })(i);
    }
}
forLoopSolution3();
