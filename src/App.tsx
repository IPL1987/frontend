import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from "./components/Sidebar/sidebar";
import { Header } from "./components/Header/header";
import { Outlet } from "react-router-dom";
import BookingForm from "../src/components/BookingForm/bookingForm"

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={3}>
            <Sidebar />
          </Col>
          <Col sm={9}>
            <BookingForm />
          </Col>
        </Row>
      </Container>

      <Outlet />
    </>
  );
}

export default App;
