import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(arr, city, grade) {
  if (!Array.isArray(arr) || !Array.isArray(grade)) {
    return [];
  }

  const arrLoc = getStudentsByLocation(arr, city);

  const arrGrade = arrLoc.map((element) => {
    const value = grade.find((i) => i.studentId === element.id);
    const elementCopy = { ...element };
    if (value && 'grade' in value) {
      elementCopy.grade = value.grade;
    } else {
      elementCopy.grade = 'N/A';
    }
    return elementCopy;
  });

  return arrGrade;
}
