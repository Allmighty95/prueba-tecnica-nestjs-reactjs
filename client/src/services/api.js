import axios from "axios";

const API_KEY = "123456789";
const BASE_URL = "http://localhost:3001";
const STUDENTS_BASE_API = "/students";
const ENDPOINTS = {
  CREATE_STUDENT: "/crear-alumno",
  GET_ALL_STUDENTS: "/consultar-alumnos/",
  GET_STUDENTS_BY_GRADE: "/consultar-alumno/",
};

const callApi = async (method, endpoint, data) => {
  const response = await axios({
    method,
    url: BASE_URL + endpoint,
    data,
    headers: {
      "x-api-key": API_KEY,
    },
  });

  return response.data;
};

export const createStudent = async (student) => {
  return callApi("POST", STUDENTS_BASE_API + ENDPOINTS.CREATE_STUDENT, student);
};

export const getStudentsByGrade = async (grade) => {
  return callApi(
    "GET",
    STUDENTS_BASE_API + ENDPOINTS.GET_STUDENTS_BY_GRADE + grade
  );
};

export const getStudents = async () => {
  return callApi("GET", STUDENTS_BASE_API + ENDPOINTS.GET_ALL_STUDENTS);
};
