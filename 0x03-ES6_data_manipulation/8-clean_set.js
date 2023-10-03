export default function cleanSet(set, word) {
  const text = [];
  set.forEach((element) => {
    if (element.startsWith(word) && word.length > 0) {
      text.push(element.slice(word.length));
    }
  });

  return text.join('-');
}
