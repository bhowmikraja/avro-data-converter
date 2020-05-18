import React from 'react';
import AvroConverter from './AvroConverter/AvroConverter.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid="md">
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Java 8/Avro Joda Date/DateTime converter</Navbar.Brand>
      </Navbar>
      <AvroConverter />
    </Container>
  );
}

export default App;
