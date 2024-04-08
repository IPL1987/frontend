import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useLoginMutation } from '../../../api/authApi';
import { LoginRequest } from '../../../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

function ModalLogin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [login, { error }] = useLoginMutation({ fixedCacheKey: 'shared-login' });

  const [formState, setFormState] = useState<LoginRequest>({
    email: '',
    password: '',
  });

  const setLoginValue = {
    onChange: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((state) => ({ ...state, [name]: value }));
    },
    onSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      login(formState);
      navigate('/');
    },
  };
  useEffect(() => { }, [error]);

  return (
    <>
      <Button className="me-2" variant="primary" onClick={handleShow}>
        Войти
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ведите E-mail и пароль</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail </Form.Label>
              <Form.Control type="email" value={formState.email} placeholder="Введите email" onChange={setLoginValue.onChange} required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" value={formState.password} placeholder="Введите пароль" onChange={setLoginValue.onChange} required />
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

export default ModalLogin;