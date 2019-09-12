const data = [
    { id: 1, items: [{id: 4, items: [{id: 5}, {id: 6, items: [{id: 8}]}]}]},
    { id: 2, items: [{id: 7}]},
    {id: 3},
    {id: 9, items: [{id: 10, items: [{id: 12}]},
    {id: 11}]}];  // Should return [1, 2, 3, 9, 4, 7, 10, 11, 5, 6, 12, 8]


function flatten(data, idArr = []) {
    for(let i = 0; i < data.length; i++) {
        const obj = data[i];
        idArr.push(obj.id);
        if(obj.items) {
            setTimeout(flatten.bind(this, obj.items, idArr));
        }
    }
    return idArr;
}
const arr = [];
//const ret = flatten(data, arr).then(res => console.log(res, arr));
//setInterval(() => console.log(arr), 1000);
// console.log(ret);


function extractIds(objects = []) {
    const queue = objects.slice();
    const response = [];
    while (queue.length) {
        const item = queue.shift();
        const {id, items} = item;
        response.push(id);
        if (!items) {
            continue;
        }
        items.forEach((subItem) => queue.push(subItem))
    };
    return response;
}
console.log(extractIds(data));
