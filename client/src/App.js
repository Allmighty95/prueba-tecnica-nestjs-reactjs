import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import CrearAlumno from "./pages/CrearAlumno";
import ConsultarAlumno from "./pages/ConsultarAlumno";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gestión de Alumnos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/crear-alumno">Crear Alumno</Nav.Link>
            <Nav.Link href="/consultar-alumno">Consultar Alumnos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/crear-alumno" element={<CrearAlumno />} />
          <Route path="/consultar-alumno" element={<ConsultarAlumno />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
