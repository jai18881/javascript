function longestSubstr(str) {
    let newStr = '';
    let maxStr = '';

    for(let i = 0; i < str.length; i++) {
				const eIndx = newStr.indexOf(str[i]);
        if (eIndx === -1) {
            newStr = newStr.concat(str[i]);

            if(newStr.length > maxStr.length) {
                maxStr = newStr;
            }
        } else {
            newStr = newStr.substr(eIndx + 1);
            i -= (eIndx + 1);
        }
    }

    return maxStr;
}

console.log(longestSubstr("dvddefd"));


