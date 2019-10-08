const expr = '5+2-3+(6+1-2+(1+(2+(1+1)+3)+1-1)+(1+2-1))+3';

function parseExpr(str) {
    const chars = '+-()';
    let total = 0;
    let negation = false;
    let openParan = -1;
    let closeParan = -1;
    let openParanCnt = 0;
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if (chars.indexOf(char) === -1) {
            total = negation ? total - char * 1 : total + char * 1;
        } else if(char === '(') {
            openParan = i;
            openParanCnt += 1;
            for (let j = i + 1; j < str.length; j++) {
                if (str[j] === '(') {
                    openParanCnt += 1;
                } else if (str[j] === ')') {
                    openParanCnt -= 1;
                }
                if (openParanCnt === 0) {
                    closeParan = j;
                    break;
                }
            }
            const subStr = str.substring(openParan + 1, closeParan);
            console.log('else if..', subStr);
            total = negation ? total - parseExpr(subStr) * 1 : total + parseExpr(subStr) * 1;
            i = closeParan;
        }
        else negation = char === '-';
    }
    return total;
}

console.log(parseExpr(expr));
console.log('eval...', eval(expr));
