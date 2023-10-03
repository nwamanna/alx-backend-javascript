const weakMap = new WeakMap();

function queryAPI(point) {
  if (!weakMap.has(point)) {
    weakMap.set(point, 0);
  }
  const val = weakMap.get(point);
  if (val >= 5) {
    throw new Error('Endpoint load is high');
  }
  console.log(val);
  weakMap.set(point, val + 1);
  console.log(weakMap);
}

// queryAPI(endpoint);
// console.log(weakMap.get(endpoint));

export { weakMap, queryAPI };
