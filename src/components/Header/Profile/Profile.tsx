import { Button, Container, Card, Stack, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../../features/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Role } from '../../../interfaces/rolesEnum';
import { User } from '../../../interfaces/interfaces';
//import { useSocket } from '../../hooks/useSocket';

export default function Profile() {
  const user = useAppSelector(selectUser) || {} as User;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //useSocket();

  const handler = {
    logout: () => {
      dispatch(logout());
      navigate('/');
    },
  };

  return (
    <Container>
      <Card className="border border-1">
        <Card.Title className="fs-2">{user?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><strong>User:</strong> {user?.name}</Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>email <strong>{user.email}</strong></ListGroup.Item>
          <ListGroup.Item>телефон <strong>{user.contactPhone}</strong></ListGroup.Item>
          <ListGroup.Item>роль <strong>{user.role}</strong></ListGroup.Item>
        </ListGroup>
        <Stack gap={2}>
          <Button variant="info" hidden={user?.role !== Role.Client}>
            <Link to={`/reservation?userId=${user._id}`} style={{ textDecoration: 'none' }} >Ваши брони</Link>
          </Button>
          <Button variant="secondary" onClick={handler.logout}>Выйти</Button>
        </Stack>
      </Card>
    </Container>
  );
}