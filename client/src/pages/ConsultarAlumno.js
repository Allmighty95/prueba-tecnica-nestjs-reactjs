import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import { getStudentsByGrade } from "../services/api";

const ConsultarAlumno = () => {
  const [idGrado, setIdGrado] = useState("");
  const [alumnos, setAlumnos] = useState([]);

  const handleConsultar = async () => {
    try {
      const response = await getStudentsByGrade(idGrado);
      setAlumnos(response);
    } catch (error) {
      console.error("Error al consultar alumnos", error);
    }
  };

  return (
    <div>
      <h2>Consultar Alumnos</h2>
      <Form.Group>
        <Form.Label>Ingrese el Grado</Form.Label>
        <Form.Control
          type="text"
          value={idGrado}
          onChange={(e) => setIdGrado(e.target.value)}
        />
      </Form.Group>
      <Button className="mt-2" onClick={handleConsultar}>
        Consultar
      </Button>

      {alumnos.length > 0 && (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha de Nacimiento</th>
              <th>Padre</th>
              <th>Madre</th>
              <th>Grado</th>
              <th>Sección</th>
              <th>Fecha de Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.id}</td>
                <td>{alumno.name}</td>
                <td>{alumno.birthDate}</td>
                <td>{alumno.fatherName}</td>
                <td>{alumno.motherName}</td>
                <td>{alumno.grade}</td>
                <td>{alumno.section}</td>
                <td>{alumno.startDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ConsultarAlumno;
