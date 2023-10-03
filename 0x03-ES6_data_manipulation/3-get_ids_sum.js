export default function getStudentIdsSum(arr) {
  return arr.reduce((sum, a) => sum + a.id, 0);
}
