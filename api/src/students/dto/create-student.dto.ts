export class CreateStudentDto {
  name: string;
  birthDate: Date;
  fatherName: string;
  motherName: string;
  grade: number;
  section: string;
  startDate: Date;
}
// const exampleJson = {
//     "name": "John Doe",
//     "birthDate": "2000-01-01T00:00:00.000Z",
//     "fatherName": "John Doe Sr.",
//     "motherName": "Jane Doe",
//     "grade": 10,
//     "section": "A",
//     "startDate": "2021-01-01T00:00:00.000Z"
//     };