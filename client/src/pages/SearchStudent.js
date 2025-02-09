import React, { useState } from "react";
import { Form, Button, Table, Alert } from "react-bootstrap";
import { getStudentsByGrade } from "../services/api";

const ConsultarAlumno = () => {
  const [idGrade, setGrade] = useState("");
  const [students, setStudents] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      setStudents(null);
      setMessage(null);
      if (!idGrade) {
        setMessage({
          type: "danger",
          text: "Debe seleccionar un grado",
        });
        return;
      }
      const response = await getStudentsByGrade(idGrade);
      setStudents(response);
    } catch (error) {
      setMessage({
        type: "danger",
        text: "Error inesperado al obtener los alumnos",
      });
    }
  };

  return (
    <div>
      {message && (
        <div className="mt-4">
          <Alert variant={message.type}>{message.text}</Alert>
        </div>
      )}
      <h2>Consultar Alumnos</h2>
      <Form.Group>
        <Form.Label>Ingrese el Grado</Form.Label>
        <Form.Control
          type="text"
          value={idGrade}
          onChange={(e) => setGrade(e.target.value)}
          onSubmit={() => handleSubmit}
        />
      </Form.Group>
      <Button className="mt-2" onClick={handleSubmit}>
        Consultar
      </Button>

      {students?.length > 0 ? (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
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
            {students.map((alumno, index) => (
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
      ) : (
        !!students && (
          <div className="mt-2">
            <p>No hay Alumnos en el grado seleccionado</p>
          </div>
        )
      )}
    </div>
  );
};

export default ConsultarAlumno;
