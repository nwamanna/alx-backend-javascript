export default function createIteratorObject(report) {
  const allEmp = [];
  for (const item of Object.values(report.allEmployees)) {
    allEmp.push(...item);
  }

  return allEmp;
}
