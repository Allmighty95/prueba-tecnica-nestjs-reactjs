import axios from "axios";
const API_KEY = "123456789";
const callApi = async (method, endpoint, data) => {
    
  const response = await axios({
    method,
    url: `http://localhost:3000${endpoint}`,
    data,
    headers: {
      "x-api-key": API_KEY,
    },
  });

  return response.data;
};

export const createStudent = async (student) => {
  return callApi("POST", "/students/crear-alumno", student);
};

export const getStudentsByGrade = async (grade) => {
  return callApi("GET", `/students/consultar-alumno/${grade}`);
}
