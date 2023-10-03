export default function getListStudentIds(x) {
  if (Array.isArray(x)) {
    return x.map((obj) => obj.id);
  }
  return [];
}
