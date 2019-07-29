let obj = {};
const wMap = new WeakMap();

wMap.set(obj, 1);

console.log('objRefvalue...', wMap.get(obj));
wMap.delete(obj)
console.log('objRefvalue...', wMap.get(obj));
