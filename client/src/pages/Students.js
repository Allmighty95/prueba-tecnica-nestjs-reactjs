import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import { getStudents } from "../services/api";

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [message, setMessage] = useState(null);

  const handleFetch = async () => {
    try {
      setMessage(null);
      const response = await getStudents();
      setAlumnos(response);
    } catch (error) {
      setMessage({
        type: "danger",
        text: `Ha ocurrido un error inesperado: ${error.message}`,
      });
      console.error("ERROR OBTENIENDO LOS ALUMNOS", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      {message && (
        <div>
          <Alert variant={message.type}>{message.text}</Alert>
        </div>
      )}
      <h2>Todos los Alumnos</h2>
      {alumnos.length > 0 ? (
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
      ) : (
        !message && (
          <div>
            <h3>No hay Alumnos en la base de datos</h3>
          </div>
        )
      )}
    </div>
  );
};

export default Alumnos;
