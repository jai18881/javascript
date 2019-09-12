let obj = {};
const wMap = new WeakSet();

wMap.set(obj);

console.log('objRefvalue...', wMap.get(obj));
wMap.delete(obj)
console.log('objRefvalue...', wMap.get(obj));
