import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../api/authApi';
import { RegisterRequest } from '../../../interfaces/interfaces';

function ModalRegister() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [formState, setFormState] = useState<RegisterRequest>({
    email: '',
    password: '',
    name: '',
    contactPhone: '',
  });

  const [register] = useRegisterMutation({ fixedCacheKey: 'shared-register' });

  const setRegisterValue = {
    onChange: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((state) => ({ ...state, [name]: value }));
    },
    onSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      register(formState);
      navigate('/');
    },
  };

  return (
    <>
      <Button className="mr-3" variant="primary" onClick={handleShow}>
        Регистрация
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ведите свои данные</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mr-3" controlId="text">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" placeholder="Введите Ваше имя" onChange={setRegisterValue.onChange}
                value={formState.email} />
            </Form.Group>
            <Form.Group className="mr-3" controlId="number">
              <Form.Label>Телефон</Form.Label>
              <Form.Control type="text" placeholder="Введите номер телефона" onChange={setRegisterValue.onChange} value={formState.contactPhone} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Введите email" onChange={setRegisterValue.onChange} value={formState.email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" onChange={setRegisterValue.onChange} value={formState.password} />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Подтвердить
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRegister;