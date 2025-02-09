import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchStudent from "./pages/SearchStudent";
import CreateStudent from "./pages/CreateStudent";
import Students from "./pages/Students";

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
          <Route path="/" element={<Students />} />
          <Route path="/crear-alumno" element={<CreateStudent />} />
          <Route path="/consultar-alumno" element={<SearchStudent />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
