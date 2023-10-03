export default function updateUniqueItems(mapArg) {
  if (mapArg instanceof Map) {
    mapArg.forEach((value, key) => {
      if (value === 1) {
        mapArg.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }

  return mapArg;
}
