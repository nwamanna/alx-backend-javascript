export default function cleanSet(set, word) {
  if (!word || typeof set !== 'object' || typeof word !== 'string' || word.length === 0) {
    return '';
  }

  const text = [];
  set.forEach((element) => {
    if (element.startsWith(word) && word.length > 0) {
      text.push(element.slice(word.length));
    }
  });

  return text.join('-');
}
