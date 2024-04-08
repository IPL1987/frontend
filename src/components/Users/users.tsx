import { useEffect } from "react";
import { Container, FloatingLabel } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setUsersState } from "../../features/userSlice";
import UsersList from "./UsersList";
import UsersSearchForm from "./userSearchForm";

function UsersMain() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector(state => state.userAPI);

  useEffect(() => {
    if (userState.offset !== 0 || userState.email.length !== 0 || userState.name.length !== 0 || userState.contactPhone.length !== 0) {
      dispatch(setUsersState({ offset: 0, email: '', name: '', contactPhone: '' }));
    }
  }, []);

  return (
    <Container className="bg-white rounded shadow-sm p-2">
      <Container>
        <FloatingLabel
          controlId="floatingInput"
          label="Введите имя пользователя, email или телефон"
          className="mb-3"
        ><UsersSearchForm />
        </FloatingLabel>
      </Container>
      <UsersList />
    </Container>
  )
}

export default UsersMain