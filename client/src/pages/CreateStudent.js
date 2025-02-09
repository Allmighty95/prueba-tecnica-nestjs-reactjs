import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { createStudent } from "../services/api";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    fatherName: "",
    motherName: "",
    grade: "",
    section: "",
    startDate: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(formData);
      setMessage({ type: "success", text: "Alumno creado correctamente" });
      setFormData({
        name: "",
        birthDate: "",
        fatherName: "",
        motherName: "",
        grade: "",
        section: "",
        startDate: "",
      });
    } catch (error) {
      setMessage({ type: "danger", text: "Error al crear alumno" });
      console.error(
        "Error en la petición:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <h2>Crear Alumno</h2>
      {message && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            name="birthDate"
            value={formData.birthDate || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nombre del Padre</Form.Label>
          <Form.Control
            type="text"
            name="fatherName"
            value={formData.fatherName || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nombre de la Madre</Form.Label>
          <Form.Control
            type="text"
            name="motherName"
            value={formData.motherName || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Grado</Form.Label>
          <Form.Control
            type="number"
            name="grade"
            value={formData.grade || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sección</Form.Label>
          <Form.Control
            type="text"
            name="section"
            value={formData.section || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha de Ingreso</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Guardar Alumno
        </Button>
      </Form>
    </div>
  );
};
export default CreateStudent;
