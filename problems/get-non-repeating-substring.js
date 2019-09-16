function longestSubstr(str) {
    let newStr = '';
    let maxStr = '';

    for(let i = 0; i < str.length; i++) {

        if (newStr.indexOf(str[i]) === -1) {
            newStr = newStr.concat(str[i]);

            console.log(`if newStr: ${newStr}, str[i]: ${str[i]}, i: ${i}`);
            if(newStr.length > maxStr.length) {
                maxStr = newStr;
            }
        } else {
            newStr = '';
            i = i - 1;
            console.log(`else newStr: ${newStr}, i: ${i}`);
        }
    }

    return maxStr;
}

console.log(longestSubstr('aaababacbbcdefgcdefg'));


