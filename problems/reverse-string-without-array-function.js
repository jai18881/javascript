const str = 'jaivardhan';

function reverseStrSubStr(str) {
    let reversedStr = '';
    for (let i = 1; i <= str.length; i++) {
        reversedStr += str.substr(-i, 1);

    }
    return reversedStr;
}

function reverseStrSlice(str) {
    if(str.length === 0) return '';
    return str.slice(-1) + reverseStrSlice(str.slice(0, -1));
}

console.log(reverseStrSubStr(str));
console.log(reverseStrSlice(str));

// console.log(str.slice(-1));
// console.log(str.substr(0, str.length - 1));
// console.log(str.substring(0, str.length - 1));
// console.log(str.substring(-1, 1));
// str.slice(1);
