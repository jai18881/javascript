const arr = [1, 2, 1, 2, 4, 5, 6, 7];
let incl = 0;
let excl = 0;
let tempIncl = 0;

for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
        incl = arr[0];
        continue;
    }

    tempIncl = incl;
    incl = Math.max(arr[i] + excl, incl);
    excl = tempIncl;
    console.log(i, incl, excl);
}

console.log(Math.max(incl, excl));
