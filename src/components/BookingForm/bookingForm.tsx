import { Button, Card } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function BookingForm() {
  return (
    <>
      <Card.Text>
        <Form.Group className="mb-3 mt-3" controlId="formSearchHotelTitle">
          <Form.Control
            name='title'
            placeholder="Введите название гостиницы (необязательно)"
            type="text"/>
        </Form.Group>
      </Card.Text>
      <FloatingLabel
        controlId="floatingInput"
        label="Дата заселения"
        className="mb-3 mt-1 .border-warning"
      >
        <Form.Control type="date" placeholder="01.01.2000" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Дата отъезда"
        className="mb-3"
      >
        <Form.Control type="date" placeholder="01.01.2000" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Поиск
      </Button>
    </>
  );
}

export default BookingForm;